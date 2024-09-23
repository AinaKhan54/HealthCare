import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice'; // Import your auth slice
import { persistReducer } from 'redux-persist'; // Persist reducer
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage

// Configuration for persisting the auth slice
const authPersistConfig = {
  key: 'auth',
  storage, // Default storage is localStorage
};

// Combine reducers and add persistReducer to the auth slice
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer), // Persist the auth slice
  // Add more reducers here as needed
});

export default rootReducer;
