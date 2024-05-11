import { useReducer } from 'react';
import { initialStateNavigation, reducer } from './reducer';

function StateNavigation() {
  const [navigationContextState, navigationContextDispatch] = useReducer(reducer, initialStateNavigation);

  return { navigationContextState, navigationContextDispatch };
}

export default StateNavigation;