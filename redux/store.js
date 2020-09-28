import {
  LOAD_REQUEST_USERS,
  SET_SUCCESS_USERS,
  SET_FAILURE_USERS,
  REMOVE_USER,
  ADD_USER,
} from './actionTypes';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

export const store = createStore(
  reducer,
  {
    loadingUsers: false,
    users: null,
  },
  applyMiddleware(logger, thunk),
  //   window.devToolsExtension && window.devToolsExtension()
);

export default function reducer(state, action) {
  switch (action.type) {
    case LOAD_REQUEST_USERS:
      return {
        ...state,
        loadingUsers: true,
      };
    case SET_SUCCESS_USERS:
      return {
        ...state,
        loadingUsers: false,
        users: action.payload,
      };
    case SET_FAILURE_USERS:
      return {
        ...state,
        loadingUsers: false,
        users: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(x => x.id !== action.payload),
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
}
