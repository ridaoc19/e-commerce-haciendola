import { Request, Response } from 'express';
import { StatusHTTP } from '../../core/utils/send/enums';
import { errorHandlerCatch, errorHandlerRes } from '../../core/utils/send/errorHandler';
import { successHandler } from '../../core/utils/send/successHandler';
import { AppDataSource } from '../../data-source';
import ProductEntity from './entity';
import CategoryEntity from '../category/entity';

export default {
  async createProduct(req: Request, res: Response) {
    try {
      const { category_id } = req.params;
      const { product, description, price, listPrice, images, stock, handle, barcode, sku, grams } = req.body;
      const categoryRepository = AppDataSource.getRepository(CategoryEntity);
      const productRepository = AppDataSource.getRepository(ProductEntity);

      const existingCategory = await categoryRepository.findOne({ where: { category_id } });

      if (!existingCategory) {
        return errorHandlerRes({
          res, req,
          status_code: 404,
          status: StatusHTTP.notFound_404,
          errors: [{ field: 'product_create', message: 'categoría no encontrada' }],
        });
      }

      const newProduct = new ProductEntity();
      newProduct.product = product
      newProduct.description = description
      newProduct.price = price
      newProduct.listPrice = listPrice
      newProduct.images = images
      newProduct.stock = stock
      newProduct.handle = handle
      newProduct.barcode = barcode
      newProduct.sku = sku
      newProduct.grams = grams
      newProduct.category = existingCategory
      await productRepository.save(newProduct)


      successHandler({
        res,
        dataDB: [newProduct],
        json: {
          field: 'product_create',
          message: 'Producto creado',
          status_code: 201,
          status: StatusHTTP.created_201,
        },
      });
    } catch (error) {
      errorHandlerCatch({ error, res, req });
    }
  },

  async updateProduct(req: Request, res: Response) {
    try {
      const { product_id } = req.params;
      const { product, description, price, listPrice, images, stock, handle, barcode, sku, grams } = req.body;

      const productRepository = AppDataSource.getRepository(ProductEntity);

      const existingProduct = await productRepository.findOne({ where: { product_id } });

      if (!existingProduct) {
        return errorHandlerRes({
          res, req,
          status_code: 404,
          status: StatusHTTP.notFound_404,
          errors: [{ field: 'product_edit', message: 'Producto no encontrado' }],
        });
      }

      existingProduct.product = product
      existingProduct.description = description
      existingProduct.price = price
      existingProduct.listPrice = listPrice
      existingProduct.images = images
      existingProduct.stock = stock
      existingProduct.handle = handle
      existingProduct.barcode = barcode
      existingProduct.sku = sku
      existingProduct.grams = grams

      await productRepository.save(existingProduct);

      successHandler({
        res,
        dataDB: [existingProduct],
        json: {
          field: 'product_update',
          message: 'Producto actualizado',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });
    } catch (error) {
      console.log(error)
      errorHandlerCatch({ error, res, req });
    }
  },

  async deleteProduct(req: Request, res: Response) {
    try {
      const { product_id } = req.params;

      const productRepository = AppDataSource.getRepository(ProductEntity);

      const existingProduct = await productRepository.findOne({ where: { product_id } });

      if (!existingProduct) {
        return errorHandlerRes({
          res, req,
          status_code: 404,
          status: StatusHTTP.notFound_404,
          errors: [{ field: 'product_delete', message: 'Producto no encontrado' }],
        });
      }

      await productRepository.remove([existingProduct]);

      successHandler({
        res,
        dataDB: [existingProduct],
        json: {
          field: 'product_delete',
          message: 'Producto eliminado',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });
    } catch (error) {
      errorHandlerCatch({ error, res, req });
    }
  },

  async getProduct(req: Request, res: Response) {
    try {
      const { product_id } = req.params;

      const productRepository = AppDataSource.getRepository(ProductEntity);

      const product = await productRepository.findOne({ where: { product_id }, relations: { category: true } });

      if (!product) {
        return errorHandlerRes({
          res, req,
          status_code: 404,
          status: StatusHTTP.notFound_404,
          errors: [{ field: 'product_get', message: 'Producto no encontrado' }],
        });
      }

      successHandler({
        res,
        dataDB: [product],
        json: {
          field: 'product_get',
          message: 'Producto obtenido',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });
    } catch (error) {
      errorHandlerCatch({ error, res, req });
    }
  },
};
