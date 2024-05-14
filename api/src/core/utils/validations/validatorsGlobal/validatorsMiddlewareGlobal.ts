import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { validationSchemas } from './validationsSchemas';
import { MapStatusCode, StatusHTTP } from '../../send/enums';

export const validatorsMiddlewareGlobal = async (req: Request, res: Response, next: NextFunction) => {
  const requestBody: Record<string, unknown> = req.body;
  const fieldsToValidate: string[] = Object.keys(requestBody);

  const errorResponse: MapStatusCode<string>[StatusHTTP.badRequest_400] = {
    status: StatusHTTP.badRequest_400,
    status_code: 400,
    errors: []
  };

  for (const field of fieldsToValidate) {
    try {
      const validationSchema = validationSchemas[field];

      if (!validationSchema) {
        throw new yup.ValidationError(`Se ha producido un error al validar ${field}. Por favor, contacte al administrador del sistema e informe sobre este inconveniente. Incluya este mensaje para una mejor asistencia: "${field}" requiere validación.`, 'required');
      }

      const fieldValue = requestBody[field];

      await validationSchema.validate(fieldValue);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        errorResponse.errors.push({ field, message: error.message });
      } else {
        console.error(error);
      }
    }
  }

  if (errorResponse.errors.length > 0) {
    res.status(errorResponse.status_code).json(errorResponse);
  } else {
    next();
  }
};