import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { CreateContext } from "../../hooks/useContext";
import { IMessagesReducer } from "../../hooks/useContext/messages/reducer";
import { IProduct } from "../../interfaces/product.interface";
import { Error, MakeProductRequestReturn, productRequest } from "./productApi";
import { RequestMapProduct, RouteProduct } from "./productRequest";

export interface StatusSection {
  isLoadingProduct: boolean;
  isProductSuccess: boolean;
  productError: Error | null;
  isProductError: boolean;
  variablesProduct: {
    route: RouteProduct;
    options: Omit<RequestMapProduct[RouteProduct], 'route' | 'method'>;
  } | undefined;
}

function useMutationProduct() {
  const queryClient = useQueryClient();
  const { messages: { messagesContextDispatch } } = useContext(CreateContext)

  const {
    data,
    mutate: executeProductMutation,
    reset: resetProductMutation,
    isPending: isLoadingProduct,
    error: productError,
    isSuccess: isProductSuccess,
    isError: isProductError,
    variables: variablesProduct
  } = useMutation({
    mutationFn: ({ route, options }: { route: RouteProduct, options: Omit<RequestMapProduct[RouteProduct], 'route' | 'method'> }) => {
      const requestData = productRequest(route).options(options);
      return requestData;
    },
    onError(error: Error) {
      messagesContextDispatch({ type: IMessagesReducer.keyDashboard.MESSAGE_UPDATE, payload: error.errors.map(e => { return { ...e, status_code: error.status_code } }) })
      return error;
    },
    onSuccess({ status_code, field, message }) {
      messagesContextDispatch({ type: IMessagesReducer.keyDashboard.MESSAGE_UPDATE, payload: [{ status_code, field, message }] })
    },
  });

  const dataSection = {
    getProductQueryData() {
      const isFetchingProduct = queryClient.isFetching({ queryKey: [IProduct.QUERY_KEY_PRODUCT.NavigationDashboard] })
      const productQueryData = queryClient.getQueryData<MakeProductRequestReturn | undefined>([IProduct.QUERY_KEY_PRODUCT.NavigationDashboard]);
      return { productData: productQueryData?.data[0] || null, productQueryData, isFetchingProduct: !!isFetchingProduct };
    },
  };

  const statusSection: StatusSection = {
    isLoadingProduct,
    isProductSuccess,
    productError,
    isProductError,
    variablesProduct
  };

  const toolsSection = {
    fetch<T extends RouteProduct>(route: T): { options: (options: Omit<RequestMapProduct[T], 'route' | 'method'>) => void } {
      return {
        options: async (options: Omit<RequestMapProduct[T], 'route' | 'method'>) => {
          executeProductMutation({ route, options });
        },
      };
    },
    removeQuery() {
      queryClient.removeQueries({ queryKey: [IProduct.QUERY_KEY_PRODUCT.NavigationDashboard] });
      queryClient.removeQueries({ queryKey: [IProduct.QUERY_KEY_PRODUCT.Navigation] });
      queryClient.removeQueries({ queryKey: [IProduct.QUERY_KEY_PRODUCT.MultipleProducts] });
    },
    resetError() {
      resetProductMutation();
    },
  }

  return {
    dataSave: data,
    data: dataSection,
    status: statusSection,
    tools: toolsSection,
    executeProductMutation
  };
}

export default useMutationProduct;
