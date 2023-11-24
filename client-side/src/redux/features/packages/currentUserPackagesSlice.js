import { createSlice } from '@reduxjs/toolkit';

const currentUserPackagesSlice = createSlice({
  name: 'addCurrentUserPackages',
  initialState: '',
  reducers: {
    setCurrentUserPackages: (state, action) => {
      
      return action.payload; 
    },
    setAdminEditedPackages: (state, action) => {
     
      return action.payload;
      
    },
    setAddFilterPackagesOnScreen: (state, action) => {
     
      return action.payload;
      
    },
   
  },
   
});

export const { setCurrentUserPackages,
   setAdminEditedPackages ,
   setAddFilterPackagesOnScreen
   } = currentUserPackagesSlice.actions;
export const currentUserPackagesReducer = currentUserPackagesSlice.reducer;

export default currentUserPackagesReducer;
