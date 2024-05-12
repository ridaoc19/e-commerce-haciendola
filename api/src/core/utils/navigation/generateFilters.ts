import { SelectQueryBuilder } from "typeorm";
import { findParentUUID } from "../findParentUUID";
import ProductEntity from "../../../modules/product/entity";


export interface GenerateFiltersReturn {
  category: string[]
}

export const generateFilters = async (queryBuilder: SelectQueryBuilder<ProductEntity>, search: string, entity?: string): Promise<GenerateFiltersReturn> => {

  if (findParentUUID(search)) {
    queryBuilder.where(`product.${entity}_id = :id`, { id: search });
  } else {
    const searchTerms = search.split(' ').join('|');
    queryBuilder.where(`LOWER(product.product::text) ~ LOWER(:regex)`, { regex: `(${searchTerms})` })
  }

  await queryBuilder
    .getMany();

  const uniqueCategories = await queryBuilder
    // .andWhere(/* Otras condiciones si es necesario */)
    .select(['DISTINCT category.category'])
    .getRawMany();

  const categories = uniqueCategories.map(e => e.category)

  return {
    category: categories.length > 1 ? categories : [],
  }

}