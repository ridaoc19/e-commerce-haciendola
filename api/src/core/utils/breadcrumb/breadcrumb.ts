import { AppDataSource } from "../../../data-source";
import CategoryEntity from "../../../modules/category/entity";
import ProductEntity from "../../../modules/product/entity";
import { findParentUUID } from "../findParentUUID";
export interface Data {
  name: string;
  _id: string;
  name_id: 'category' | 'product' | 'search'
}

type Category = {
  entity: 'category';
  data: Data[];
};

type Product = {
  entity: 'product';
  data: Data[];
};

type Search = {
  entity: 'search';
  data: Data[];
}

// Define el tipo de retorno para la función de breadcrumbs
export type GetBreadcrumbsReturn =  Category | Product | Search | null;
type GetEntityBreadcrumbs =  Category | Product | Search;

export async function getBreadcrumbs(entityId: string): Promise<GetBreadcrumbsReturn> {
  const entityTypes = ['search', 'category', 'product'];

  for (const entityType of entityTypes) {
    const breadcrumb = await getEntityBreadcrumbs(entityType, entityId);

    if (breadcrumb && breadcrumb.data.length > 0) {
      return breadcrumb;
    }
  }

  return null;
}

async function getEntityBreadcrumbs(entityType: string, entityId: string): Promise<GetEntityBreadcrumbs | null> {
  switch (entityType) {
    case 'search':

      const search: Data[] = findParentUUID(entityId) ? [] : [{
        _id: "",
        name: entityId,
        name_id: "search"
      }]

      return {
        entity: 'search',
        data: search
      };

    case 'category':
      const responseCategory = await AppDataSource.getRepository(CategoryEntity)
        .createQueryBuilder('category')
        .where({ category_id: entityId })
        .select([
          'category.category_id', 'category.category',
        ])
        .getMany();

      const cat = responseCategory[0]

      const categories: Data[] = cat ? [
        {
          _id: cat.category_id,
          name: cat.category,
          name_id: 'category'
        },
      ] : []

      return {
        entity: 'category',
        data: categories,
      };

    case 'product':
      const responseProduct = await AppDataSource.getRepository(ProductEntity)
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.category', 'category')
        .where({ product_id: entityId })
        .select([
          'category.category_id', 'category.category',
          'product.product_id', 'product.product',
        ])
        .getMany();

      const pro = responseProduct[0]

      const products: Data[] = pro ? [
        {
          _id: pro.category.category_id,
          name: pro.category.category,
          name_id: 'category'
        },
        {
          _id: pro.product_id,
          name: pro.product,
          name_id: 'product'
        },
      ] : []

      return {
        entity: 'product',
        data: products,
      };

    default:
      return null;
  }
}
