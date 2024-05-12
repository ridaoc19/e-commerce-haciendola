export namespace IProduct {
  export enum QUERY_KEY_PRODUCT {
    SingleProduct = 'user',
    MultipleProducts = 'products',
    Navigation = 'navigation',
    NavigationDashboard = 'navigationDashboard'
  }
  type Route = "request" | "create" | "edit" | "delete" | "";
  export type Method = "get" | "post" | "put" | "delete";
  export type Routes = {
    routes: Route
  }

  export interface Product {
    product_id: string;
    product: string;
    description: string;
    category: Category;

    price: number;
    listPrice: number;
    images: string[];
    stock: number;
    handle: string;
    barcode: string;
    sku: string;
    grams: string;
  }
  export interface Category {
    category_id: string;
    category: string;
    products: Product[];
  }

  export interface ListProduct {
    category: Omit<Category, 'department' | 'subcategories'>;
    product: Omit<Product, 'subcategory' | 'variants'>;
  }
}


export function isCategory(item: IProduct.Category | IProduct.Product): item is IProduct.Category {
  return (item as IProduct.Category).category !== undefined;
}


export function isProduct(item: IProduct.Category | IProduct.Product): item is IProduct.Product {
  return (item as IProduct.Product).category !== undefined;
}
