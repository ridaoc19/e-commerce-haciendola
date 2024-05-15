import { useMutation } from "@tanstack/react-query";
import { Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import Breadcrumb from "../../../../components/common/breadcrumb/Breadcrumb";
import { CreateContext } from "../../../../hooks/useContext";
import { IMessagesReducer } from "../../../../hooks/useContext/messages/reducer";
import { BreadcrumbType } from "../../../../interfaces/global.interface";
import { ErrorNavigation, navigationRequest } from "../../../../services/navigation/navigationApi";
import { RequestMapNavigation, RouteNavigation } from "../../../../services/navigation/navigationRequest";
import { RouteProduct } from "../../../../services/product/productRequest";

export interface InitialStateProductCreation {
  openModalForm: boolean;
  mutation: {
    entity: keyof RequestMapNavigation[RouteNavigation.NavigationListProductDashboard]['data']['filters'] | ''
    route: RouteProduct;
    paramId: string;
  }
}

export interface MutationFn {
  type: 'search' | 'selected'
  search: string;
  entity: keyof RequestMapNavigation[RouteNavigation.NavigationListProductDashboard]['data']['filters']
}

export const initialStateProductCreation: InitialStateProductCreation = {
  openModalForm: false,
  mutation: {
    entity: '',
    route: RouteProduct.CategoryCreate,
    paramId: ''
  }
}

export interface UseProductCreationQueryReturn {
  query: {
    data: RequestMapNavigation[RouteNavigation.NavigationListProductDashboard]['data'] | undefined
    isLoading: boolean
    isError: boolean
    error: ErrorNavigation | null
    isSuccess: boolean
    isFetching: boolean,
    mutate: (data: MutationFn) => void
  },
  Breadcrumb: ReactNode,
  setStateProductCreation: Dispatch<SetStateAction<InitialStateProductCreation>>,
  stateProductCreation: InitialStateProductCreation
}

function useProductCreationQuery(): UseProductCreationQueryReturn {
  const { messages: { messagesContextDispatch } } = useContext(CreateContext)
  const [stateProductCreation, setStateProductCreation] = useState<InitialStateProductCreation>(initialStateProductCreation)

  const { mutate, isPending: isLoading, error, isSuccess, isError, data } = useMutation({
    mutationFn: ({ search, entity, type  }: MutationFn) => {
      const requestData = navigationRequest(RouteNavigation.NavigationListProductDashboard).options({
        extensionRoute: `/${search}/${entity}/${type}`
      });
      return requestData;
    },
    onError(error: ErrorNavigation) {
      messagesContextDispatch({ type: IMessagesReducer.keyDashboard.MESSAGE_UPDATE, payload: error.errors.map(e => { return { ...e, status_code: error.status_code } }) })
      return error;
    },
    onSuccess(data, {search, entity}) {
      if (data?.data && data.data.filters.category.length === 0) {
        messagesContextDispatch({ type: IMessagesReducer.keyDashboard.MESSAGE_UPDATE, payload: [{ status_code: 204, field: 'search_creation_product', message: `La solicitud se ha completado con éxito, pero no hay ${entity === 'category' ? 'categorías creadas' : 'productos creados'} con el nombre "${search}".` }] })
      }
      // messagesContextDispatch({ type: IMessagesReducer.keyDashboard.MESSAGE_UPDATE, payload: [{ status_code, field, message }] })
    },
  });

  return {
    query: { data: data?.data, isLoading, isError, error, isSuccess, isFetching: isLoading, mutate },
    Breadcrumb: <Breadcrumb redirect={false} viewHome={false} breadcrumb={data?.data.breadcrumb || { data: [], entity: BreadcrumbType.Category }} />,
    setStateProductCreation,
    stateProductCreation,
  };
}

export default useProductCreationQuery;