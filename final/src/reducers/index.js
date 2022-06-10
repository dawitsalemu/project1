import { combineReducers } from "redux";
import userReducer from './userReducer';

function userReducer(state = null, action){
    switch(action.type){
        case 'LOGIN':
            return action.payload;

            default:
                return state;
    }
}

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;