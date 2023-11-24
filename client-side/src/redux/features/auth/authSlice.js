import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import auth from '../../services/authService'
import {FormData, instance} from '../../../axios/axios'

const state = {
    user: null,
    Queries:[],
    userDetail:null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
}

export const ForgotPasswordLink = createAsyncThunk('/ForgotPasswordLink', async (userData,thunkAPI) => { 
    console.log("🚀 ~ file: authSlice.js:16 ~ ForgotPasswordLink ~ userData:", userData)
    try {   
        const response=await instance.post('/auth/user-forget-link/',{email:userData})
                  return response.data
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString()
        thunkAPI.rejectWithValue(message)
    }


})
 
    export const currentUserDetail = createAsyncThunk('/currentUserDetail', async (userData,thunkAPI) => { 
        console.log("🚀 ~ file: authSlice.js:18 ~ currentUserDetail ~ userData:", userData)
        try {   
            const response=await instance.post('/auth/user-details/',userData)
                      return response.data
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString()
            thunkAPI.rejectWithValue(message)
        }


    })



    export const editProfileCSP = createAsyncThunk('/editProfile-csp', async (userData,thunkAPI) => {
        try {
            const response=await FormData.put('/auth/user-update/',userData)
                      return response.data
        } catch (error) {
            const message = error.response?.data?.message || error.message || error.toString()
            thunkAPI.rejectWithValue(message)
        }


    })


    export const contactUs = createAsyncThunk('/contact-us', async (userData, thunkAPI) => {
        // Perform validation on the userData
        if (!userData.firstname || !userData.lastname || !userData.email || !userData.company || !userData.phone || !userData.message)
         {
          throw new Error("Please fill all credentials");
        }
      
        try {
          const response = await instance.post('/auth/contactus/', userData);
          return response.data;
        } catch (error) {
          const message = error.response?.data?.message || error.message || error.toString();
          thunkAPI.rejectWithValue(message)
        }
      });
      



 

   export  const authSlice = createSlice({
        name: 'auth',
        initialState: state,
        reducers: {
            reset:(state,action)=>{
                state.isSuccess = false
                state.isLoading = false
                state.isError = false
            }

        },
        extraReducers: (builder) => {
            builder
                .addCase(editProfileCSP.pending, (state) => {
                    state.isLoading = true

                }).addCase(editProfileCSP.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.user = action.payload
                }).addCase(editProfileCSP.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
                })




                .addCase(contactUs.pending, (state) => {
                    state.isLoading = true

                }).addCase(contactUs.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.Queries = action.payload
                }).addCase(contactUs.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
                })

                
                .addCase(currentUserDetail.pending, (state) => {
                    state.isLoading = true

                }).addCase(currentUserDetail.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.userDetail = action.payload
                }).addCase(currentUserDetail.rejected, (state, action) => {
                    state.isLoading = false
                    state.isError = true
                    state.message = action.payload
                    state.user = null
                })


                // .addCase(allCSP.pending, (state) => {
                //     state.isLoading = true

                // }).addCase(allCSP.fulfilled, (state, action) => {
                //     state.isLoading = false
                //     state.isSuccess = true
                //     state.user = action.payload
                //     state.message=action.payload.message
                // }).addCase(allCSP.rejected, (state, action) => {
                //     state.isLoading = false
                //     state.isError = true
                //     state.message = action.payload
                //     state.user = null
                // })


                // .addCase(allUsers.pending, (state) => {
                //     state.isLoading = true

                // }).addCase(allUsers.fulfilled, (state, action) => {
                //     state.isLoading = false
                //     state.isSuccess = true
                //     state.user = action.payload
                //     state.message=action.payload.message
                // }).addCase(allUsers.rejected, (state, action) => {
                //     state.isLoading = false
                //     state.isError = true
                //     state.message = action.payload
                //     state.user = null
                // })



        }
    })


    export default authSlice.reducer
    export const {reset}= authSlice.actions

