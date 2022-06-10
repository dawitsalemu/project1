import { configureStore } from "@reduxjs/toolkit";
// import our reducers from the slices we have to create
import userReducer from "./Slices/UserSlice";
import reimbursementsReducer from "./Slices/ReimbursementSlice";


export const store = configureStore({
    reducer: {
        // different reducers for modifying our state
        user: userReducer,
        reimbursements: reimbursementsReducer
    }
});

// export these things to make our lives easier later
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;