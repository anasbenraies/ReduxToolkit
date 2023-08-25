import { combineReducers } from "@reduxjs/toolkit";
 import counterReducer from "./Counter/counterSlice"
 import userReducer from "./User/userSlice"
const rootReducer =combineReducers({
    user: userReducer,
    counter:counterReducer, 

})

export default rootReducer