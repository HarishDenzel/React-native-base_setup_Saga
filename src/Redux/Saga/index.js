import {all} from 'redux-saga/effects';
import loginSaga from "./saga";


  
  
  function* sagaWatchers() {
    yield all([
        loginSaga()
    ]);
  }
  
  export default sagaWatchers;