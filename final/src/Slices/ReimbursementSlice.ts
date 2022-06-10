import {createSlice, createAsyncThunk} from  "@reduxjs/toolkit";
import axios from "axios";
import {IReimbursement} from "../Interfaces/IReimbursement";

interface ReimbursementSliceState{
    loading: boolean,
    error: boolean,
    reimbursements?: IReimbursement[]
}

const initialReimbursementState: ReimbursementSliceState = {
    loading: false,
    error: false
};

type reimbursement = {
    reimbursementId: number,
    amount: number,
    submittedDate: string,
    resolvedDate: string,
    description: string,
    reimbursementAuthor: number,
    reimbursementResolver: number,
    reimbursementStatus: number,
    reimbursementType: number,
    userId?: any
}

type change = {
    resolvedDate: string,
    reimbursementResolver: number,
    reimbursementStatus: number
}

export const addReimbursement = createAsyncThunk(
    'reimbursement/add',
    async(reimbursement:reimbursement, thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const response = await axios.post('http://localhost:8000/reimbursement/add', reimbursement);
            return response.data;
        } catch(e){
            return thunkAPI.rejectWithValue('wrong');
        }
    }
)

export const getReimbursementById = createAsyncThunk(
    "reimbursement/get",
    async (id: number | undefined, thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const response = await axios.get(`http://localhost:8000/reimbursements/view/${id}`);
            return response.data;
        } catch (e){
            console.log(e);
        }
    }  
);

export const getAllReimbursements = createAsyncThunk(
  "reimbursement/get",
  async (thunkAPI) => {
      try{
          axios.defaults.withCredentials = true;
          const res = await axios.get("http://localhost:8000/reimbursements/viewall");

          return res.data;
      } catch (e){
          console.log(e);
      }
  }  
)

// export const createReimbursement = createAsyncThunk(
//     "reimbursements/create",
//     async (newReimbursement:IReimbursement, thunkAPI) => {
//         try{
//             axios.defaults.withCredentials = true;
//             const res = await axios.post("http://localhost:8000/reimbursement/register", newReimbursement);

//             return newReimbursement;
//         } catch (e){
//             console.log(e);
//         }
//     }
// )

export const deleteReimbursement = createAsyncThunk(
    "reimbursement/delete",
    async (id: number | string, thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const response = await axios.delete(`http://localhost:8000/reimbursements/delete/${id}`);

            return response.data;
        } catch (e){
            console.log(e);
        }
    }
)

export const ReimbursementSlice = createSlice({
    name: 'reimbursement',
    initialState: initialReimbursementState,
    reducers: {
        clearReimbursements: (state) => {
            state.reimbursements = undefined;
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(getReimbursements.pending, (state, action)=> {
        //     state.loading = true;
        // });
        // builder.addCase(getReimbursements.fulfilled, (state, action) => {
        //     state.reimbursements = action.payload;
        //     state.loading = false;
        //     state.error = false;
        // });
        // builder.addCase(getReimbursements.rejected, (state, action) => {
        //     state.error = true;
        //     state.loading = false;
        // });

        // builder.addCase(createReimbursement.fulfilled, (state, action) => {
        //     if(state.reimbursements && action.payload){
        //         state.reimbursements = [action.payload, ...state.reimbursements];
        //     }
        // });

        // builder.addCase(deleteReimbursement.fulfilled, (state, action) => {
        //     if(state.reimbursements && action.payload){
        //         state.reimbursements = [action.payload, ...state.reimbursements];
        //         //const id = state.filer((reimb) => reimb.getReimbursementById === action.payload)
        //     }
        // });
    }
});

// export const {toggleError} = ReimbursementSlice.actions;

export const {clearReimbursements} = ReimbursementSlice.actions;

export default ReimbursementSlice.reducer;