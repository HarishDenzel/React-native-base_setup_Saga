
import {all, takeEvery, put} from 'redux-saga/effects';
import authApi from '../../Services//Api';
import { login } from '../../Services/ApiList';
import * as types from '../ActionTypes';
function* fetchLogin(action) {

  try {
    const response = yield authApi.PostRequest(login,action.params);
    console.log('saga==>', response);
    yield put({type:types.LOGIN_SUCCESS, response: response});
  } catch (e) {
    yield put({type:types.LOGIN_FAILURE, error: e.message});
  }
}

function* loginSaga() {
  yield takeEvery(types.LOGIN_INITIATED, fetchLogin);
}

export default loginSaga;
