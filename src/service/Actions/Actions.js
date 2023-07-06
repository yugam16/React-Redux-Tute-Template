import { ADD_TO_CART, REMOVE_FROM_CART, IS_REQUESTED, TOGGLE_CART_HOME } from "../Constants";

export const addtocart = (data)=>{
    return{
        type: ADD_TO_CART,        
        data
    }
}

export const removefromcart = (data) =>{
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const togglePage = (data)=>{
    return{
        type: TOGGLE_CART_HOME,
        data
    }
}