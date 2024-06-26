import { BreadcrumbType, MapEntityBreadcrumb } from "../../interfaces/global.interface";
import { IProduct } from "../../interfaces/product.interface";

export enum RouteNavigation {
  NavigationMenu = 'get|navigation/menu',
  NavigationListProduct = 'get|navigation/list-product',
  NavigationSearch = 'get|navigation/search',
  NavigationListProductDashboard = 'get|navigation/list-product-dashboard',
  NavigationProductView = 'post|navigation/product_view',
}

export type RequestMapNavigation = {
  [RouteNavigation.NavigationMenu]: {
    route: RouteNavigation.NavigationMenu;
    data: (Pick<IProduct.Category, 'category_id' | 'category' > & {products: Pick<IProduct.Product, 'product_id' | 'product'>[]})[]

  },
  [RouteNavigation.NavigationListProduct]: {
    route: RouteNavigation.NavigationListProduct;
    extensionRoute: `/${string}/${string}/${string}/${string}${string}`;
    data: {
      breadcrumb: MapEntityBreadcrumb[BreadcrumbType];
      listProduct: IProduct.Product[];
      filters: {
        department: string[]
        category: string[]
        subcategory: string[]
        brand: string[]
        attributes: {
          [key: string]: string[];
        }
        specifications: {
          [key: string]: string[];
        }
      }
      totalCount: number;
    }
  },
  [RouteNavigation.NavigationSearch]: {
    route: RouteNavigation.NavigationSearch;
    extensionRoute: `/${string}`;
    data: {
      listProduct: (IProduct.Product & { breadcrumb: MapEntityBreadcrumb[BreadcrumbType] })[];
      totalCount: number;
    }
  },
  [RouteNavigation.NavigationListProductDashboard]: {
    route: RouteNavigation.NavigationListProductDashboard;
    extensionRoute: `/${string}/${string}/${string}`;
    data: {
      breadcrumb: MapEntityBreadcrumb[BreadcrumbType] | null;
      listProduct: IProduct.ListProduct[] | null;
      filters: {
        category: Array<IProduct.Category>
        product: Array<IProduct.Product>
      }
      totalCount: number | null;
    }
  },
  [RouteNavigation.NavigationProductView]: {
    route: RouteNavigation.NavigationProductView;
    extensionRoute: `/${string}`;
    data: []
  },
};



