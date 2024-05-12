import { RequestMapProduct, RouteProduct } from "../../../../services/product/productRequest";

export const initialStateForm: RequestMapProduct = {
  "post|category/create": {
    route: RouteProduct.CategoryCreate,
    requestData: {
      category: ''
    },
  },
  "put|category/edit": {
    route: RouteProduct.CategoryEdit,
    requestData: {
      category: ''
    },
    paramId: ''
  },
  "delete|category/delete": {
    route: RouteProduct.CategoryDelete,
    paramId: ''
  },
  "post|product/create": {
    route: RouteProduct.ProductCreate,
    requestData: {
      product: '',
      description: '',

      barcode: '',
      handle: "",
      images: [],
      listPrice: 0,
      price: 0,
      sku: "",
      stock: 0,
      grams: '',
    },
    paramId: ''
  },
  "put|product/edit": {
    route: RouteProduct.ProductEdit,
    requestData: {
      product: '',
      description: '',

      barcode: '',
      handle: "",
      images: [],
      listPrice: 0,
      price: 0,
      sku: "",
      stock: 0,
      grams: '',
    },
    paramId: ''
  },
  "delete|product/delete": {
    route: RouteProduct.ProductDelete,
    paramId: ''
  },

}