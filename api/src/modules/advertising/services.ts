import { Request, Response } from 'express';
import { StatusHTTP } from '../../core/utils/send/enums';
import { errorHandlerCatch, errorHandlerRes } from '../../core/utils/send/errorHandler';
import { successHandler } from '../../core/utils/send/successHandler';
import { AppDataSource } from '../../data-source';
import AdvertisingEntity from './entity';

export default {
  async createAdvertising(req: Request, res: Response) {
    try {
      const advertisingRepository = AppDataSource.getRepository(AdvertisingEntity);

      const newAdvertising = advertisingRepository.create(req.body);

      await advertisingRepository.save(newAdvertising);

      const allAdvertising = await getAllAdvertising()

      successHandler({
        res,
        dataDB: allAdvertising,
        json: {
          field: 'advertising_create',
          message: 'Anuncio creado correctamente',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });

    } catch (error) {
      errorHandlerCatch({ req, error, res });
    }
  },
  async updateAdvertising(req: Request, res: Response) {
    try {
      const { advertising_id } = req.params;
      const advertisingRepository = AppDataSource.getRepository(AdvertisingEntity);

      const existingAdvertising = await advertisingRepository.findOne({ where: { advertising_id } });

      if (!existingAdvertising) {
        return errorHandlerRes({ req, res, status_code: 404, status: StatusHTTP.notFound_404, errors: [{ field: 'category_edit', message: 'Categoría no existe' }] })
      }

      advertisingRepository.merge(existingAdvertising, req.body);
      await advertisingRepository.save(existingAdvertising);

      const allAdvertising = await getAllAdvertising()

      successHandler({
        res,
        dataDB: allAdvertising,
        json: {
          field: 'advertising_update',
          message: 'Anuncio actualizado correctamente',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });
    } catch (error) {
      errorHandlerCatch({ req, error, res });
    }
  },
  async deleteAdvertising(req: Request, res: Response) {

    try {
      const { advertising_id } = req.params;
      const advertisingRepository = AppDataSource.getRepository(AdvertisingEntity);

      const existingAdvertising = await advertisingRepository.findOne({ where: { advertising_id } });

      if (!existingAdvertising) {
        return errorHandlerRes({ req, res, status_code: 404, status: StatusHTTP.notFound_404, errors: [{ field: 'advertising_delete', message: 'Anuncio no encontrado' }] })
      }

      await advertisingRepository.delete(existingAdvertising);
      // await advertisingRepository.softRemove(existingAdvertising);

      const allAdvertising = await getAllAdvertising()


      successHandler({
        res,
        dataDB: allAdvertising,
        json: {
          field: 'advertising_delete',
          message: 'Anuncio eliminado correctamente',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });
    } catch (error) {
      errorHandlerCatch({ req, error, res });
    }
  },
  async getAdvertising(req: Request, res: Response) {
    try {
      const allAdvertising = await getAllAdvertising()
      successHandler({
        res,
        dataDB: allAdvertising,
        json: {
          field: 'advertising_get',
          message: 'Anuncios obtenidos correctamente',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });
    } catch (error) {
      errorHandlerCatch({ req, error, res });
    }
  },
};

export const getAllAdvertising = async () => {
  const advertisingRepository = AppDataSource.getRepository(AdvertisingEntity);
  const allAdvertising = await advertisingRepository.find();

  // const getTopViewedProducts = await AppDataSource
  //   .getRepository(NavigationEntity)
  //   .createQueryBuilder("navigation")
  //   .orderBy("navigation.product_view", "DESC")
  //   .leftJoinAndSelect('navigation.product', 'product')
  //   .leftJoinAndSelect('product.variants', 'variants')
  //   .take(15)
  //   .getMany();

  // const topViewedProducts = getTopViewedProducts.map(({ product: { product_id, brand, product, variants } }) => {
  //   return {
  //     product_id, product, brand,
  //     images: variants[0].images[0],
  //     price: variants.map(e => e.price)
  //   }
  // })

  return { dataAdvertising: allAdvertising, topViewedProducts: [] }
}