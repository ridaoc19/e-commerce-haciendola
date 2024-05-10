import { Request, Response } from 'express';
// import { v4 as uuidv4 } from 'uuid';

// import { findParentProperty } from '../../core/utils/navigation/findParentProperty';

import { errorHandlerCatch } from '../../core/utils/send/errorHandler';
import { successHandler } from '../../core/utils/send/successHandler';

import { StatusHTTP } from '../../core/utils/send/enums';
import { AppDataSource } from '../../data-source';
import CategoryEntity from '../category/entity';

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

}