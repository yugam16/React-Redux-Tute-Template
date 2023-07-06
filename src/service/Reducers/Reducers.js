import { ADD_TO_CART, IS_REQUESTED, REMOVE_FROM_CART,TOGGLE_CART_HOME } from "../Constants";

const initialStates = {
    cartData: [],
    isDisable: false
}

export function cartItem(state = [], action)
{
    switch(action.type){
        case ADD_TO_CART:
            let a = state.filter(el => el.cartData.id === action.data.id);
            if(a.length !== 0)
            {
                return [
                    ...state              
                ]
            }
            else
            {
                return [
                    ...state,
                    {cartData: action.data,isDisable: true},
                ]
            }
        case REMOVE_FROM_CART:
           let IdxArr;
           state.forEach((el,idx)=>{
                if(el.cartData.id === action.data)
                {
                    IdxArr = idx;
                }
           });
           state.splice(IdxArr,1);
           return [...state];
        default:
            return state;
    }
}

export function showRoute(state = true,action)
{
    switch(action.type)
    {
        case TOGGLE_CART_HOME:
            return !state;

        default:
            return state;
    }
}