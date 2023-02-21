/* eslint-disable */
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import saga from "redux-saga"
import reducers from "../Redux/Reducres";
import * as types from "../Redux/ActionTypes";
import sagaWatchers from "../Redux/Saga";


const sagaMiddleware=saga()
const middleware = [sagaMiddleware];
// const persistConfig = {
//   key: "root",
//   keyPrefix: "",
//   storage: AsyncStorage,
//   whitelist: ["loginreducer"],
// };
const appReducer = combineReducers({
  ...reducers,
});
const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

// const pReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};

const composedEnhancers = compose(applyMiddleware(...middleware));

const stores = createStore(appReducer, initialState, composedEnhancers);
export const store = stores;

// export const persistor = persistStore(store);
sagaMiddleware.run(sagaWatchers)