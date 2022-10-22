const INTIALSTATE ={
    globalCounter :0,
};
const addCounterReducer =(state =INTIALSTATE,action)=>{
    switch (action.type){
        case "ADD_COUNTER":
            console.log("Add Counter");
            return{
                // ...state,
                globalCounter: ++state.globalCounter,
            };
           
                default:
                    return{
                        ...state,
                        // name:"Huzaifa",
                };
                } 
                };
                
const MinusCounterReducer =(state =INTIALSTATE,action)=>{
    switch (action.type){
        case "MINUS_COUNTER":
            console.log("Minus Counter");

            return{
                // ...state,
                globalCounter: --state.globalCounter,
               };
           
                 default:
                   return{
                        ...state,
                           // name:"Huzaifa",
                         };
                         } 
                         };        
export {addCounterReducer,MinusCounterReducer};