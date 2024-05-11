import { Request, Response } from 'express';
// import { v4 as uuidv4 } from 'uuid';
import { errorHandlerCatch } from '../../core/utils/send/errorHandler';
import { successHandler } from '../../core/utils/send/successHandler';
import { getBreadcrumbs } from '../../core/utils/breadcrumb/breadcrumb';
import { findParentUUID } from '../../core/utils/findParentUUID';
import { stringEmpty } from '../../core/utils/functionsGlobal';
import { generateFilters, GenerateFiltersReturn } from '../../core/utils/navigation/generateFilters';
import { StatusHTTP } from '../../core/utils/send/enums';
import { AppDataSource } from '../../data-source';
import CategoryEntity from '../category/entity';
import ProductEntity from '../product/entity';

export default {
  async getMenu(req: Request, res: Response) {
    try {

      const responseMenu = await AppDataSource
        .createQueryBuilder(CategoryEntity, 'category')
        .leftJoinAndSelect('category.products', 'product')
        .select([
          'category.category_id', 'category.category',
          'product.product_id', 'product.product',
        ])
        .getMany();


      const response = responseMenu.map(item => {
        return {
          ...item,
          products: item.products.slice(0, 20)
        }
      })

      successHandler({
        res,
        dataDB: response,
        json: {
          field: 'navigation_get',
          message: 'Departamentos, categorías, subcategoría y productos obtenidos',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });
    } catch (error) {
      errorHandlerCatch({ req, error, res });
    }
  },
  async getListProduct(req: Request, res: Response) {
    const { id, skip, take } = req.params;

    const filtersQuery = Object.entries(req.query).map(([key, value]) => {
      const values = Array.isArray(value) ? value : [value];
      return values.map((element: string) => `${stringEmpty(key)}${stringEmpty(element)}`);
    }).flat();

    try {
      const breadcrumb = await getBreadcrumbs(id);

      if (!breadcrumb?.entity) return

      const queryBuilder = AppDataSource
        .getRepository(breadcrumb.entity === 'category' ? CategoryEntity : ProductEntity)
        .createQueryBuilder(breadcrumb.entity === 'category' ? 'category' : 'product')

      let generateFiltersResponse: GenerateFiltersReturn = { category: [] }

      if (breadcrumb.entity === 'category') {
        queryBuilder.leftJoinAndSelect('category.products', 'product')
      } else if (breadcrumb.entity === 'product' || breadcrumb.entity === 'search') {
        queryBuilder.leftJoinAndSelect('product.category', 'category')

        const filtersQueryBuilder = queryBuilder.clone();
        generateFiltersResponse = await generateFilters(filtersQueryBuilder, id, breadcrumb?.entity);
      }

      // // Condición para el ID de navigation
      if (findParentUUID(id)) {

        queryBuilder.where(`${breadcrumb?.entity}.${breadcrumb?.entity}_id = :id`, { id });

        if (Object.keys(req.query).length > 0) {
          queryBuilder.andWhere(`LOWER(category.category::text) ~ LOWER(:regex)`, { regex: `(${filtersQuery.join('|')})` })
        }

      } else {
        const searchTerms = id.split(' ').join('|');
        queryBuilder.where(`LOWER(product.product::text) ~ LOWER(:regex)`, { regex: `(${searchTerms})` })

        if (Object.keys(req.query).length > 0) {
          queryBuilder.andWhere(`LOWER(category.category::text) ~ LOWER(:regex)`, { regex: `(${filtersQuery.join('|')})` })
        }
      }

      // // Seleccionar campos específicos
      await queryBuilder
        .getMany();


      let product = await queryBuilder
        .select(['DISTINCT ON (product.product) product.product_id, product.product, product.description, product.price, product.listPrice, product.images, product.stock, product.handle, product.barcode, product.sku, Product.grams'])
        .skip(Number(skip))
        .take(Number(take))
        .getRawMany();

      product = product.length > 0 && product[0].product_id ? product : []

      // // Obtener el recuento total
      const totalCount = product.length;

      successHandler({
        res,
        dataDB: {
          totalCount,
          filters: generateFiltersResponse,
          breadcrumb,
          listProduct: product,
        },
        json: {
          field: 'navigation_list-product',
          message: 'Datos obtenidos',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });
    } catch (error) {
      console.log(error)
      errorHandlerCatch({ req, error, res });
    }
  },

}