import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { IUser, TypeDashboard } from "../interfaces/user.interface";
import { Error, MakeUserRequestReturn, userRequest } from "../services/user/userApi";
import { RequestMapUser, RouteUser } from "../services/user/userRequest";
import { CreateContext } from "./useContext";
import { IMessagesReducer } from "./useContext/messages/reducer";

function useMutationUser() {
  const queryClient = useQueryClient();
  const { messages: { messagesContextDispatch }, dashboard: { dispatchDashboard, stateDashboard: { login } } } = useContext(CreateContext)

  const {
    mutate,
    isPending,
    error,
    isSuccess,
    isError,
    data
  } = useMutation({
    mutationFn: ({ route, options }: { route: RouteUser, options: Omit<RequestMapUser[RouteUser], 'route' | 'method'> }) => {
      dispatchDashboard({ type: TypeDashboard.DASHBOARD_LOGIN, payload: { ...login, isLoading: true } })
      const requestData = userRequest(route).options(options);
      return requestData;
    },
    onError(error: Error) {
      messagesContextDispatch({ type: IMessagesReducer.keyDashboard.MESSAGE_UPDATE, payload: error.errors.map(e => { return { ...e, status_code: error.status_code } }) })
      return error;
    },
    onSuccess(data, { route }) {
      if (route === RouteUser.AccountAdminDelete || route === RouteUser.AccountAdminPut) {// para admin de usuarios
        dispatchDashboard({ type: TypeDashboard.DASHBOARD_LOGIN_DELETE_USER_ALL, payload: '' })
        queryClient.removeQueries({ queryKey: [IUser.QUERY_KEY_USER.MultipleUsers] });
      }
      if (route !== RouteUser.AccountAdminGet) {
        queryClient.setQueryData([IUser.QUERY_KEY_USER.SingleUser], data);
        messagesContextDispatch({ type: IMessagesReducer.keyDashboard.MESSAGE_UPDATE, payload: [{ field: data.field, status_code: data.status_code, message: data.message }] })
      } else {
        queryClient.setQueryData([IUser.QUERY_KEY_USER.MultipleUsers], data);
      }
    },
  });

  useEffect(() => {
    const userQueryData = queryClient.getQueryData<MakeUserRequestReturn | undefined>([IUser.QUERY_KEY_USER.SingleUser]);
    const allUserQueryData = queryClient.getQueryData<MakeUserRequestReturn | undefined>([IUser.QUERY_KEY_USER.MultipleUsers]);
    dispatchDashboard({
      type: TypeDashboard.DASHBOARD_LOGIN, payload: {
        field: data?.field || "",
        isLoading: isPending,
        isLogin: login.isLogin,
        isSuccess,
        errors: error?.errors ? error.errors.filter(e => e.field !== 'general') : [],
        user: userQueryData?.data && userQueryData.data.length > 0 ? userQueryData.data[0] : IUser.userDataEmpty,
        userAll: allUserQueryData?.data || []
      }
    })
    // eslint-disable-next-line
  }, [isPending, isError, isSuccess])

  const dataSection = {
    getUserQueryData() {
      const isFetchingUser = queryClient.isFetching({ queryKey: [IUser.QUERY_KEY_USER.SingleUser] })
      const userQueryData = queryClient.getQueryData<MakeUserRequestReturn | undefined>([IUser.QUERY_KEY_USER.SingleUser]);
      return { userData: userQueryData?.data[0] || null, userQueryData, isFetchingUser: !!isFetchingUser };
    },
    getAllUserQueryData() {
      const isFetchingAllUser = queryClient.isFetching({ queryKey: [IUser.QUERY_KEY_USER.MultipleUsers] })
      const allUserQueryData = queryClient.getQueryData<MakeUserRequestReturn | undefined>([IUser.QUERY_KEY_USER.MultipleUsers]);
      return { allUserData: allUserQueryData?.data || null, allUserQueryData, isFetchingAllUser: !!isFetchingAllUser };
    },
  };

  const statusSection = {
    isLoadingUser: isPending,
    isUserSuccess: isSuccess,
    userError: error,
    isUserError: isError,
  };

  const toolsSection = {
    fetch<T extends RouteUser>(route: T): { options: (options: Omit<RequestMapUser[T], 'route' | 'method'>) => void } {
      return {
        options: async (options: Omit<RequestMapUser[T], 'route' | 'method'>) => {
          mutate({ route, options });
        },
      };
    },
    removeAllQueries() {
      queryClient.removeQueries({ queryKey: [IUser.QUERY_KEY_USER.MultipleUsers] });
    },
    removeQuery() {
      queryClient.removeQueries({ queryKey: [IUser.QUERY_KEY_USER.SingleUser] });
    },
    resetError() {
      queryClient.resetQueries({ queryKey: [IUser.QUERY_KEY_USER.SingleUser] })
      // reset();
    },
  }

  false && console.log(dataSection, statusSection, toolsSection)
  function mutateUser<T extends RouteUser>(route: T): { options: (options: Omit<RequestMapUser[T], 'route' | 'method'>) => void } {
    return {
      options: async (options: Omit<RequestMapUser[T], 'route' | 'method'>) => {
        mutate({ route, options });
      },
    };
  }

  return {
    mutateUser,
    tools: toolsSection,
  };
}

export default useMutationUser;
