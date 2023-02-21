import * as types from "../ActionTypes";
const initialState = {
  loginResponse: null,
  loginError: null,
};
export default function LoginReducer(state = initialState, action) {
  console.log("reducer==>",action.type)
  switch (action.type) {
    case types.LOGIN_INITIATED:
      return {
        ...state,
        isLoginLoding: true,
        isLoginSuccess: false,
        isLoginError: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoginLoding: false,
        isLoginSuccess: false,
        isLoginError: true,

        loginError: action.response,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoginLoding: false,
        isLoginSuccess: true,
        isLoginError: false,

        loginResponse: action.response,
      };
    default:
      return state;
  }
}
