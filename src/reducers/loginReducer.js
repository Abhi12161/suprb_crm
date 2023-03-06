import * as types from '../actions';

const initialState = {

}

export default function (state = initialState, action) {
  const response = action.response;
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:

      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};