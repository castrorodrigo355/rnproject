import {
  LOAD_REQUEST_USERS,
  SET_SUCCESS_USERS,
  SET_FAILURE_USERS,
  /* ************************ */
  REMOVE_USER,
  ADD_USER,
} from './actionTypes';

export const getUsers = () => {
  return async dispatch => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    dispatch({type: LOAD_REQUEST_USERS});
    try {
      const res = await fetch(url);
      const response = await res.json();
      if (response) {
        const users = response.map(x => {
          return {
            id: Math.floor(Math.random() * 100000) + 1,
            name: x.name,
            userName: x.username,
          };
        });
        dispatch({
          type: SET_SUCCESS_USERS,
          payload: users,
        });
      } else {
        dispatch({type: SET_FAILURE_USERS, payload: null});
      }
    } catch (error) {
      dispatch({type: SET_FAILURE_USERS, payload: null});
    }
  };
};

export const removeUser = id => ({
  type: REMOVE_USER,
  payload: id,
});

export const addUser = user => ({
  type: ADD_USER,
  payload: user,
});
