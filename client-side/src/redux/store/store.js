import authReducer from '../features/auth/authSlice';
import packagesReducer from '../features/packages/packageApis';
import { configureStore } from '@reduxjs/toolkit';
import currentUserPackagesReducer from '../features/packages/currentUserPackagesSlice';
import LocalStorageDataReducer from '../features/packages/userLocalStorageDataSlice'




export const store = configureStore({
  reducer: {
    auth: authReducer,
    packages: packagesReducer,
    currentUserPackages: currentUserPackagesReducer,
    localStorageData: LocalStorageDataReducer,

  },
});

export default store;