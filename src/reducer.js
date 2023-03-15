import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    c:0,
}
const costumReducer = createReducer(initialState,{
    increment:(state,action)=>{
        state.c +=action.payload
    },
    decrement:(state)=>{
        state.c -=1
    }
    
})
export default costumReducer