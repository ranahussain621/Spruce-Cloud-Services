import { createAsyncThunk, createSlice, legacy_createStore } from "@reduxjs/toolkit";
// import auth from '../../services/authService'
import {instance,FormData} from "../../../axios/axios";
// import { axiosPrivate } from '../../../axios/axios'


const state = {
  packages: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  SearchData:[],
  packageDetails: null,
  userPackages:[],
  AddFiterPacakgesPayload:null,
 
};




export const EditPackageForDashboard = createAsyncThunk('/EditPackage',async(editedData,thunkAPI)=>{

  try {
    const response = await FormData.put('packages/edit-package',editedData)
    return response.data
  } catch (error) {
    const message =
    error.response?.data?.error || error.message || error.toString();

  return thunkAPI.rejectWithValue(message);
  }

})


// show whole package of database to impletement search functioinality
export const PackagesForSearch = createAsyncThunk('/packagesForSearch', async (_, thunkAPI) => {
 
  try {
    const response = await instance.get('packages/get-packages-for-search');
    
    return response.data.packages;
  } catch (error) {
    const message =
          error.response?.data?.error || error.message || error.toString();
  
        return thunkAPI.rejectWithValue(message);
  }
});



// show current user packages list
export const getCurrentUserPackages = createAsyncThunk('packages/setUserPackages', async(userId,thunkAPI)=>{
  try {
    const response = await instance.post('packages/get-current-user-packages',{currentUserId: userId})
    return response.data;
  } catch (error) {
    const message =
    error.response?.data?.error || error.message || error.toString();

  return thunkAPI.rejectWithValue(message);
  }

})



//   ALL Packages showing on HomePage with pagination functionality

export const showPackages = createAsyncThunk(
  "/getAllPackages",
  async (_, thunkAPI) => {

    try {
      const response = await instance.get("/packages/get-packages");
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.error || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


// delete package
export const deletePackage = createAsyncThunk(
  'packages/deletePackage',
  async(package_id , thunkAPI)=>{
    try {
      const response =await instance.delete(`packages/delete-package/${package_id}`);
      return response.data;
    } catch (error) {
      const message =
      error.response?.data?.error || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
    }
  }
)


// show the package detail
export const fetchPackageDetails = createAsyncThunk('packageDetails/fetchPackageDetails', async(userData,thunkAPI)=>{
  
    try {
      const response =await instance.post('/packages/get-package-details',userData);
      return response.data;
    } catch (error) {
      const message =
      error.response?.data?.error || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
    }
  }
)



//show attibute list
export const attributeList = createAsyncThunk(
  "/attribute-list",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("packages/get-attributes");
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.error || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


// {Add New Attributes from CSP Dashboard}
export const addNewAttribute = createAsyncThunk(
  "/addNewAttribute",
  async (userData, thunkAPI) => {

    try {
      const response = await instance.post("/packages/add-attribute/", userData);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.error || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


// {Add Filter button attributes to get Relevant Packages}

export const addFilterPackages = createAsyncThunk(
  "/addFilterPackages",
  async (userData, thunkAPI) => {

    try {
      
      const response = await instance.post(
        "/packages/get-packages-by-attrid",
        userData
      );

      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.error || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


// {Sending Package Details and Attributes from CSP Dashboard}
export const cspDashboard = createAsyncThunk("/cspDashboard", async (userData, thunkAPI) => {
    try {
      const response = await FormData.post("/packages/add-package/", userData);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.error || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);





export const packagesSlice = createSlice({
  name: "packages",
  initialState: state,
  reducers: {
    reset: (state, action) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showPackages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showPackages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "";
        state.packages = action.payload;
      })
      .addCase(showPackages.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.packages = null;
      })

      .addCase(attributeList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(attributeList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        let attributes = action.payload;
        if (state?.packages?.packages) {
          state.packages = { ...state.packages, attributes: attributes };
        }
        state.packages = { ...state?.packages, attributes: attributes };
      })
      .addCase(attributeList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.packages = [];
      })

      .addCase(addNewAttribute.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewAttribute.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        //   state.packages = action.payload

        let newAttributes = action.payload;
        if (state?.packages?.attributes) {
          state.packages.attributes = {
            ...state.packages.attributes,
            attributes: newAttributes,
          };
        }
        state.packages = {
          ...state?.packages.attributes,
          attributes: newAttributes,
        };
      })
      .addCase(addNewAttribute.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.packages = [];
      })




      .addCase(cspDashboard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cspDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(cspDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.packages = null;
      })



      .addCase(addFilterPackages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFilterPackages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.AddFiterPacakgesPayload = action.payload
        // let filterPackages = action.payload;
        // if (state?.packages?.packages) {
        //   state.packages = {
        //     ...state.packages,
        //     filterPackages: filterPackages,
        //   };
        // }
        // state.packages = { ...state?.packages, filterPackages: filterPackages };
      })
      .addCase(addFilterPackages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.packages = [];
      })



      .addCase(PackagesForSearch.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(PackagesForSearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.SearchData = action.payload;
      })
      .addCase(PackagesForSearch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })



      .addCase(fetchPackageDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchPackageDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.packageDetails = action.payload;
      })
      .addCase(fetchPackageDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })



      .addCase(getCurrentUserPackages.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getCurrentUserPackages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userPackages = action.payload;
      })
      .addCase(getCurrentUserPackages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })



      .addCase(deletePackage.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deletePackage.fulfilled, (state,action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message

      })
      .addCase(deletePackage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })

      

      .addCase(EditPackageForDashboard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(EditPackageForDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(EditPackageForDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;

      });


  },
});



export default packagesSlice.reducer;
export const { reset } = packagesSlice.actions;
