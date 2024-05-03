import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});

export default store;

/* 
In this code:

We import configureStore from @reduxjs/toolkit.
We import cryptoApi from "../services/cryptoApi". Make sure this path is correct relative to the file you're working in.
We define a store using configureStore.
In the store configuration, we include the reducer for cryptoApi using the computed property name syntax [cryptoApi.reducerPath]: cryptoApi.reducer.
We use the middleware parameter to customize the middleware logic. We use a function to access the default middleware and then concatenate the RTK-Query middleware cryptoApi.middleware to it using concat.
Finally, we export the store.
*/
