import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { IReimbursement } from "../Interfaces/IReimbursement";
import {IUser} from "../Interfaces/IUser";

// default state for

interface UserSliceState {
    loading: boolean,
    error: boolean,
    user?: IUser
}

const initialUserState: UserSliceState = {
    loading: false,
    error: false
}

type login = {
    username: string,
    password: string
}

type user = {
    userId: number,
    userName: string,
    password: string,
    firstName: any,
    lastName: any,
    email: string,
    role: number,
    reimbursements?: IReimbursement[]
}

type change = {
    userId: any,
    userName: any,
    password: any,
    firstName: any,
    lastName: any,
    email: any,
    role: any
}

//const navigator = useNavigate();
export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials:login, thunkAPI) => {
        try{
            const response = await axios.post('http://localhost:8000/users/login', credentials);
            console.log(response.data.firstName);
            //navigator('/home');
            return {
                userId: response.data.userId,
                userName: response.data.userName,
                password: response.data.password,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                role: response.data.role
            }
        } catch(e){
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
)

export const getUserDetails = createAsyncThunk(
    'user/view',
    async (id: number, thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const response = await axios.get(`http://localhost:8000/users/view/${id}`);
            return {
                userId: response.data.userId,
                userName: response.data.username,
                password: response.data.password,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                role: response.data.role
            }
        } catch(error){
            console.log(error);
        }
    }
)

export const updateUser = createAsyncThunk(
    "user/update",
    async (change:change, thunkAPI) => {
        try{
              //axios.defaults.withCredentials = true;
            //const response = await axios.put(`http://localhost:8000/users/update`, change);
            //console.log(change);
            const response = await axios.put(`http://localhost:8000/users/update`, change);
            return response.data;
        } catch (e){
            console.log(e);
        }
    }  
);

export const logout = createAsyncThunk(
    "user/logout",
    async (thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const res = axios.get("http://localhost:8000/users/logout");
        } catch(e){
            console.log(e);
        }
    }
)

// the slice
export const UserSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        toggleError : (state) => {
            state.error = !state.error;
        }
    },
    extraReducers: (builder) => {
        // reducer logic
        // login
        builder.addCase(loginUser.pending, (state, action)=> {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload; //payload - return from the above asyncThunk
            state.error = false;
            state.loading = true;
        });
        builder.addCase(loginUser.rejected, (state, action)=> {
            state.error = true;
            state.loading = false;
        });
        // get details
        builder.addCase(getUserDetails.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getUserDetails.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = false;
            state.loading = false;
        });
        builder.addCase(getUserDetails.rejected, (state, action)=> {
            state.error = true;
            state.loading = false;
        });
        // update
        builder.addCase(updateUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            //state.user = action.payload;
            state.error = false;
            state.loading = false;
        });
        // builder.addCase(updateUser.rejected, (state, action)=> {
        //     state.error = true;
        //     state.loading = false;
        // });
        // logout
        builder.addCase(logout.fulfilled, (state, action)=> {
            state.user = undefined;
        })
    }
})

//export normal actions and reducers
export const {toggleError} = UserSlice.actions;

export default UserSlice.reducer;