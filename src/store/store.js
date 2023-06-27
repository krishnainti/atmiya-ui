import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import registerSlice from "./registerSlice";

let reducers = combineReducers({
  register: registerSlice,
});

const persistConfig = {
  key: "atmiya",
  storage: storage,
  whiteList: ["register"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const webStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const webPersister = persistStore(webStore);

export { webStore, webPersister };
