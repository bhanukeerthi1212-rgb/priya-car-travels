import { BUY_MOBILE } from "./MobileType";

//State
const intitialStock={
    noOfMobiles:10
}

//Reducer
const mobileReducer=(state = intitialStock,action)=>{
            switch(action.type) {
                case BUY_MOBILE:
                    return{
                        noOfMobiles:state.noOfMobiles-1
                    }
                    default:
                        return state;
            }
}
export default mobileReducer