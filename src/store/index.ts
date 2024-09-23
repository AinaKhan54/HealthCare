import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; // Your combined reducers
import rootSaga from './rootSaga'; // Root saga for redux-saga
import { persistStore } from 'redux-persist'; // For persisting the store

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer, // Use the root reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }).concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Persistor setup for redux-persist
export const persistor = persistStore(store);

// Type exports
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
