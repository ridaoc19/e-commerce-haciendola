import { IProduct } from "../../interfaces/product.interface";

export enum RouteProduct {
  CategoryCreate = 'post|category/create',
  CategoryEdit = 'put|category/edit',
  CategoryDelete = 'delete|category/delete',

  ProductDelete = 'delete|product/delete',
  ProductCreate = 'post|product/create',
  ProductEdit = 'put|product/edit',
}

export type RequestMapProduct = {
  [RouteProduct.CategoryCreate]: {
    route: RouteProduct.CategoryCreate;
    requestData: Pick<IProduct.Category, 'category'>;
  };
  [RouteProduct.CategoryEdit]: {
    route: RouteProduct.CategoryEdit;
    paramId: IProduct.Category['category_id'];
    requestData: Pick<IProduct.Category, 'category'>;
  };
  [RouteProduct.CategoryDelete]: {
    route: RouteProduct.CategoryDelete;
    paramId: IProduct.Category['category_id'];
  };

  [RouteProduct.ProductCreate]: {
    route: RouteProduct.ProductCreate;
    paramId: IProduct.Category['category_id'];
    requestData: Omit<IProduct.Product, 'product_id' | 'category'>;
  };
  [RouteProduct.ProductEdit]: {
    route: RouteProduct.ProductEdit;
    paramId: IProduct.Product['product_id'];
    requestData: Omit<IProduct.Product, 'product_id' | 'category'>;
  };
  [RouteProduct.ProductDelete]: {
    route: RouteProduct.ProductDelete;
    paramId: IProduct.Product['product_id'];
  };

};