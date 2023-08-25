import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        name:"Test",
        email:'Test@gmail.com',
        roles:["employee","chef"]
    },reducers:{
        setName:(state,action)=>{
            state.name=action.payload
        },
        addRole:(state,action)=>{
            state.roles=[...state.roles,action.payload]
          }
        },
       
        
})


export default userSlice.reducer

export const {setName,addRole} = userSlice.actions
