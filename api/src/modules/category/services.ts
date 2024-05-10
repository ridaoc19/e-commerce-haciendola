import { Request, Response } from 'express';
import { StatusHTTP } from '../../core/utils/send/enums';
import { errorHandlerCatch, errorHandlerRes } from '../../core/utils/send/errorHandler';
import { successHandler } from '../../core/utils/send/successHandler';
import { AppDataSource } from '../../data-source';
import DepartmentEntity from '../department/entity';
import CategoryEntity from './entity';

export default {
  async createCategory(req: Request, res: Response) {
    try {
      const { department_id } = req.params;
      const { category } = req.body;

      const departmentRepository = AppDataSource.getRepository(DepartmentEntity);
      const categoryRepository = AppDataSource.getRepository(CategoryEntity);

      const existingDepartment = await departmentRepository.findOne({ where: { department_id } });

      if (!existingDepartment) {
        return errorHandlerRes({ req, res, status_code: 404, status: StatusHTTP.notFound_404, errors: [{ field: 'category_create', message: 'Departamento no encontrado' }] })
      }

      const newCategory = new CategoryEntity();
      newCategory.category = category;
      newCategory.department = existingDepartment;
      await categoryRepository.save(newCategory);

      successHandler({
        res,
        dataDB: [newCategory],
        json: {
          field: 'category_create',
          message: 'Categoría creada',
          status_code: 201,
          status: StatusHTTP.created_201,
        },
      });
    } catch (error) {
      errorHandlerCatch({ error, res, req });
    }
  },
  async updateCategory(req: Request, res: Response) {
    try {
      const { category_id } = req.params;
      const { category } = req.body;

      const categoryRepository = AppDataSource.getRepository(CategoryEntity);

      const existingCategory = await categoryRepository.findOne({ where: { category_id } });

      if (!existingCategory) {
        return errorHandlerRes({ res, req, status_code: 404, status: StatusHTTP.notFound_404, errors: [{ field: 'category_edit', message: 'Categoría no existe' }] })
      }

      existingCategory.category = category;

      await categoryRepository.save(existingCategory);

      successHandler({
        res,
        dataDB: [existingCategory],
        json: {
          field: 'category_update',
          message: 'Categoría actualizada',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });
    } catch (error) {
      errorHandlerCatch({ error, res, req });
    }
  },
  async deleteCategory(req: Request, res: Response) {
    try {
      const { category_id } = req.params;

      const categoryRepository = AppDataSource.getRepository(CategoryEntity);

      const existingCategory = await categoryRepository.findOne({ where: { category_id } });

      if (!existingCategory) {
        return errorHandlerRes({ req, res, status_code: 404, status: StatusHTTP.notFound_404, errors: [{ field: 'category_delete', message: 'Categoría no encontrado' }] })
      }

      await categoryRepository.remove(existingCategory);

      successHandler({
        res,
        dataDB: [existingCategory],
        json: {
          field: 'category_delete',
          message: 'Categoría eliminada',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });
    } catch (error) {
      errorHandlerCatch({ error, res, req });
    }
  },
  async getCategory(req: Request, res: Response) {
    try {
      const { category_id } = req.params;

      const categoryRepository = AppDataSource.getRepository(CategoryEntity);

      const category = await categoryRepository.findOne({ where: { category_id }, relations: { department: true } });

      if (!category) {
        return errorHandlerRes({ req, res, status_code: 404, status: StatusHTTP.notFound_404, errors: [{ field: 'category_get', message: 'Categoría no encontrado' }] })
      }

      successHandler({
        res,
        dataDB: [category],
        json: {
          field: 'category_get',
          message: 'Categoría obtenida',
          status_code: 200,
          status: StatusHTTP.success_200,
        },
      });
    } catch (error) {
      errorHandlerCatch({ error, res, req });
    }
  },
};