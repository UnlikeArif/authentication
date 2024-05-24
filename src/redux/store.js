import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import ProductSlice from './Slices/ProductSlice';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';

// Define which reducers to persist
const reducersToPersist = [
    'product'
];

const persistConfig = {
    key: 'root',
    storage,
    whitelist: reducersToPersist,
};

// Combine reducers
const rootReducer = combineReducers({
    product: ProductSlice,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Set up middleware
const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}

// Configure store
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(middleware),
});

// Create persistor
const persistor = persistStore(store);

// Export store, persistor, and storage
export { store, persistor, storage };
