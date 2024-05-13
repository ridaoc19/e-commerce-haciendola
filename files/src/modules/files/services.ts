import { Request, Response } from 'express';
import * as path from 'path';
import { StatusHTTP } from '../../core/utils/send/enums';
import { errorHandlerCatch, errorHandlerRes } from '../../core/utils/send/errorHandler';
import { successHandler } from '../../core/utils/send/successHandler';
import { AppDataSource } from '../../data-source';
import FilesEntity, { CategoryEntity, ProductEntity } from './entity';
import { deleteFiles, Files, getFiles, Product } from './help';
const XlsxPopulate = require('xlsx-populate');

export default {
  async imagesCreateAndDelete(req: Request, res: Response) {
    const entity = req.query.entity as string
    const location = req.query.location as string
    const name = req.query.name as string
    const typeFile = req.query.typeFile as string
    const deleteBody: string[] = req.body.delete
    const filesRepository = AppDataSource.getRepository(FilesEntity);

    try {
      // ? SIRVE PARA TODOS
      const imagesCreated: ({ fileId: string } & Omit<Files, 'file_id' | 'selected'>)[] | [] = req.files && Array.isArray(req.files) ? req.files.map(file => {
        return {
          fileId: file.filename,
          url: `${process.env.FILES_FILTER_IMAGES}/files/${file.filename}`,
          entity,
          location,
          typeFile,
          name,
        }
      }) : []

      //! EXCEL
      if (typeFile === 'excel') {
        if (imagesCreated.length === 0) {
          deleteFiles(imagesCreated.map(file => file.fileId))
          return errorHandlerRes({
            res, req,
            status_code: 404,
            status: StatusHTTP.notFound_404,
            errors: [{ field: `${entity}_${typeFile}_${name}`, message: 'Debe enviar por lo menos un archivo' }],
          });
        }

        if (imagesCreated.length > 1) {
          deleteFiles(imagesCreated.map(file => file.fileId))
          return errorHandlerRes({
            res, req,
            status_code: 404,
            status: StatusHTTP.notFound_404,
            errors: [{ field: 'file_create_excel', message: 'Solo puede enviar un (1) archivo de excel' }],
          });
        }

        const absolutePath = path.resolve(__dirname, '..', '..', '..', 'files', imagesCreated[0].fileId);
        const workbook = await XlsxPopulate.fromFileAsync(absolutePath);
        const excelData = await workbook.sheet("Hoja1").usedRange().value();
        const filterProducts: [(string)[]] = excelData.filter((e: [[]]) => e.filter(Boolean).length === 10);
        const incomplete: [(string)[]] = excelData.filter((e: [[]]) => e.filter(Boolean).length > 0 && e.filter(Boolean).length < 10);

        const result = filterProducts.slice(1).map(entry => {
          const obj: any = {};
          filterProducts[0].forEach((key, index) => {
            obj[key] = entry[index];
          });
          return obj;
        }) as Product[];

        const categoryRepository = AppDataSource.getRepository(CategoryEntity);
        const productRepository = AppDataSource.getRepository(ProductEntity);

        for (const { handle, product, category, description, sku, grams, stock, price, listPrice, barcode } of result) {
          try {
            let existingCategory = await categoryRepository.findOne({ where: { category } });
            if (!existingCategory) {
              existingCategory = new CategoryEntity();
              existingCategory.category = category;
              await categoryRepository.save(existingCategory);
            }

            const newProduct = new ProductEntity();
            newProduct.product = product;
            newProduct.description = description;
            newProduct.price = price;
            newProduct.listPrice = listPrice;
            newProduct.stock = stock;
            newProduct.handle = handle;
            newProduct.barcode = barcode;
            newProduct.sku = sku;
            newProduct.grams = grams;
            newProduct.category = existingCategory;
            await productRepository.save(newProduct);
          } catch (error) {
            console.error("Error saving product:", error);
          }
        }

        deleteFiles(imagesCreated.map(file => file.fileId))

        successHandler({
          res,
          dataDB: {
            data: [],
            delete: [],
          },
          json: {
            field: 'file_create_excel',
            message: incomplete.length > 0 ? `De ${filterProducts.length + incomplete.length} Se cargaron ${filterProducts.length} productos y faltaron por cargar ${incomplete.length} ya que estan incompletos` : `Se cargaron (${filterProducts.length} la totalidad de productos`,
            status_code: 201,
            status: StatusHTTP.created_201,
          },
        });

        //!IMAGENES Y VIDEOS
      } else {
        if (imagesCreated.length > 0) {
          const newFiles = filesRepository.create(imagesCreated);
          await filesRepository.save(newFiles);
        }

        if (Array.isArray(deleteBody) && deleteBody.length > 0) {
          const findDelete = await filesRepository
            .createQueryBuilder('files')
            .where('files.url IN (:...url)', { url: deleteBody })
            .getMany();

          if (!deleteFiles(findDelete.map(e => e.fileId))) return errorHandlerRes({
            res, req,
            status_code: 404,
            status: StatusHTTP.notFound_404,
            errors: [{ field: 'file_delete', message: 'Error al eliminar imágenes' }],
          });
          await filesRepository
            .createQueryBuilder('files')
            .delete()
            .where('files.file_id IN (:...ids)', { ids: findDelete.map(e => e.file_id) })
            .execute();
        }

        const files = await getFiles({ entity, location, name, typeFile, selected: false })

        successHandler({
          res,
          dataDB: {
            data: files,
            delete: deleteBody,
          },
          json: {
            field: 'file_create',
            message: `Se ${imagesCreated.length === 1 ? `guardo ${imagesCreated.length} archivo` : `guardarón ${imagesCreated.length} archivos`}  y en ${entity} - ${location} hay un totoal de ${files.length === 1 ? `${files.length} archivo`: `${files.length} archivos` }`,
            status_code: 201,
            status: StatusHTTP.created_201,
          },
        });
      }

    } catch (error) {
      console.error(error);
      errorHandlerCatch(error)
    }
  },

  async requestFiles(req: Request, res: Response) {
    const { entity, location, name, selected, typeFile } = req.query;
    try {

      const files = await getFiles({
        entity: entity as string,
        location: location as string,
        name: name as string,
        typeFile: typeFile as string,
        selected: selected === 'false' ? false : true
      })

      successHandler({
        res,
        dataDB: {
          data: files,
          delete: [],
        },
        json: {
          field: 'file_create',
          message: `Se cargarón ${files.length} archivos, en ${entity} - ${location}`,
          status_code: 201,
          status: StatusHTTP.created_201,
        },
      });
    } catch (error) {
      console.error(error);
      errorHandlerCatch(error);
    }
  },

  async addSelected(req: Request, res: Response) {
    try {
      const selected = req.query.selected === 'false' ? false : true


      if (Array.isArray(req.body.add) && req.body.add.length > 0) {
        await AppDataSource
          .getRepository(FilesEntity)
          .createQueryBuilder('files')
          .update(FilesEntity)
          .set({ selected })
          .where('files.url IN (:...url)', { url: req.body.add })
          .execute();
      }

      successHandler({
        res,
        dataDB: {
          data: [],
          delete: [],
        },
        json: {
          field: 'file_create',
          message: 'Imágenes actualizadas correctamente',
          status_code: 201,
          status: StatusHTTP.created_201,
        },
      });
    } catch (error) {
      console.error(error);
      errorHandlerCatch(error);
    }
  },
};