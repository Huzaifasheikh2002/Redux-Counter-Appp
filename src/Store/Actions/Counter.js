const AddCounterAction =()=>{

return(dispatch)=>{
    
    dispatch({
        type :"ADD_COUNTER",
        // payload,
    }); 
};
};
const MinusCounterAction =()=>{
    
    return(dispatch)=>{  
        dispatch({
            type :"MINUS_COUNTER",
            // payload,
        }); 
    };
    };
export {AddCounterAction ,MinusCounterAction};