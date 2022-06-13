import * as actionTypes from "./action-types"

const initialState={
    count:0,
    delta:0,
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.INCREMENT:
            return{
                ...state,
                count:state.count+1
            }
            case actionTypes.DECREMENT:
                return{
                    ...state,
                    count:state.count-1
                }
            case actionTypes.RESET:
                return{
                    ...state,
                    count:state.count=0
                }
            case actionTypes.ADD:
                return{
                    ...state,
                    count:state.count+state.delta
                }
            case actionTypes.CHANGE_INPUT_VALUE:
                return{
                    ...state,
                    delta: action.payload
                }
            default:
                return state
    }
}