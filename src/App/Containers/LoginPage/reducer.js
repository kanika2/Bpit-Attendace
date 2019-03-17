const initialState={
    loading: false
}
export const LoginReducer=(state=initialState,action)=>{
    switch(action.type){
        case "username":{
            console.log("test reducer",action.data);
            return Object.assign({},state,{username:action.data});
        }
        case "details":{
            return Object.assign({},state,{details:action.data});
        }
        default:
        return state;
    }
}

// export const counterReducer = (state = INITIAL_STATE ,action) => {  
//     if(action.type === actionTypes.INCREMENT_COUNTER) {
//         return {
//             ...state ,  
//             counter : state.counter + action.payload 
//         }
//     }
//     else if (action.type === actionTypes.DECREMENT_COUNTER) {
//         return {
//             ...state , 
//             counter : state.counter - action.payload
//         }
//     }
//     return state
// }