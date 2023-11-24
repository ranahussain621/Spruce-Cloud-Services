import { createSlice } from '@reduxjs/toolkit';

const LocalStorageDataSlice = createSlice({
  name: 'addLocalStorageData',
  initialState: '',
  reducers: {
  
    setLocalStorageData: (state, action) => {
      return action.payload;      
    },
  },
   
});

export const { 
   setLocalStorageData} = LocalStorageDataSlice.actions;
export const LocalStorageDataReducer = LocalStorageDataSlice.reducer;

export default LocalStorageDataReducer;
