import * as actionTypes from "./action-types"

export const increaseValue=()=>{
    return{
        type:actionTypes.INCREMENT
    }
}    
export const decreaseValue=()=>{
    return{
        type:actionTypes.DECREMENT
    }   
     
}
export const resetValue=()=>{
    return{
        type:actionTypes.RESET
    }   
     
}
export const addValue=()=>{
    return{
        type:actionTypes.ADD
    }   
     
}