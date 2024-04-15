import { createSlice } from "@reduxjs/toolkit";

const loginStatusSlice = createSlice({
    name : "loginStatusSlice",
    initialState:{
        status :""
    },
    reducers:{
        setloginStatusSlice :(state,action) =>{
            state.status = action.payload; 
        }
    }
});

export default loginStatusSlice.reducer;

export const {setloginStatusSlice} = loginStatusSlice.actions;