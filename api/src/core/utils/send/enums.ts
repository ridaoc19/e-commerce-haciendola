export enum StatusHTTP {
  success_200 = "success",
  created_201 = "created",
  updated_200 = "updated",
  deleted_200 = "deleted",
  noContent_204 = "no_content",
  badRequest_400 = "bad_request",
  unauthorized_401 = "unauthorized",
  forbidden_403 = "forbidden",
  notFound_404 = "not_found",
  methodNotAllowed_405 = "method_not_allowed",
  internalServerError_500 = "internal_server_error",
}

export type Errors = Array<{ field: string | 'general'; message: string }>;

export type MapStatusCode<TData> = {
  [StatusHTTP.success_200]: {
    field: string;
    status_code: 200;
    status: StatusHTTP.success_200;
    message: string;
    data: TData[];
  };
  [StatusHTTP.created_201]: {
    field: string;
    status_code: 201;
    status: StatusHTTP.created_201;
    message: string;
    data: TData[];
  };
  [StatusHTTP.updated_200]: {
    field: string;
    status_code: 200;
    status: StatusHTTP.updated_200;
    message: string;
    data: TData[];
  };
  [StatusHTTP.deleted_200]: {
    field: string;
    status_code: 200;
    status: StatusHTTP.deleted_200;
    message: string;
    data: TData[];
  };
  [StatusHTTP.noContent_204]: {
    field: string;
    status_code: 204;
    status: StatusHTTP.noContent_204;
    message: string;
  };
  [StatusHTTP.badRequest_400]: {
    status_code: 400;
    status: StatusHTTP.badRequest_400;
    errors: Errors;
  };
  [StatusHTTP.unauthorized_401]: {
    status_code: 401;
    status: StatusHTTP.unauthorized_401;
    errors: Errors;
  };
  [StatusHTTP.forbidden_403]: {
    status_code: 403;
    status: StatusHTTP.forbidden_403;
    errors: Errors;
  };
  [StatusHTTP.notFound_404]: {
    status_code: 404;
    status: StatusHTTP.notFound_404;
    errors: Errors;
  };
  [StatusHTTP.methodNotAllowed_405]: {
    status_code: 405;
    status: StatusHTTP.methodNotAllowed_405;
    errors: Errors;
  };
  [StatusHTTP.internalServerError_500]: {
    status_code: 500;
    status: StatusHTTP.internalServerError_500;
    errors: Errors;
  };
};

export type StatusHTTPSuccess = StatusHTTP.success_200
  | StatusHTTP.created_201
  | StatusHTTP.updated_200
  | StatusHTTP.deleted_200
  | StatusHTTP.noContent_204

export type StatusHTTPError = StatusHTTP.badRequest_400
  | StatusHTTP.unauthorized_401
  | StatusHTTP.forbidden_403
  | StatusHTTP.notFound_404
  | StatusHTTP.methodNotAllowed_405
  | StatusHTTP.internalServerError_500