import * as redux from "redux";
import Reducer from "./Reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import { encryptTransform } from "redux-persist-transform-encrypt";

const root = redux.combineReducers({ cart: Reducer });

const persistConfig = {
  key: "local data",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "aravind!@dE",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, root);

export const store = redux.createStore(persistedReducer);

export const persistor = persistStore(store);
