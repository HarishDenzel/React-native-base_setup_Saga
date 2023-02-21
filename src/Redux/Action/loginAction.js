import * as types from '../ActionTypes';
import authApi from '../../Services/Api';
import {login} from '../../Services/ApiList';

export function loginCall(params) {
    return {
        type: types.LOGIN_INITIATED,
        params
      };
}

