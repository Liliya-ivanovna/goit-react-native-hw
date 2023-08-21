
export const useInputReducer=(state,action)=>{
return {
    ...state,
    [action.type]: action.payload,
}
}