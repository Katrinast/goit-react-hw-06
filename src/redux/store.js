import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import contactSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
}

const persisteContactsdReducer = persistReducer(persistConfig, contactSlice)



export const store = configureStore({
  reducer: {
    contacts: persisteContactsdReducer,
    filters: filtersSlice,
}
})

export const persistor = persistStore(store);