import { ADD_TO_CART, ADJUST_QTY, REMOVE_FROM_CART } from "../action-types"

export const addToCart = (product)=>{

    return{
        type: ADD_TO_CART,
        payload: product
    }
}


export const RemoveItem = (id)=>{

    return{
        type: REMOVE_FROM_CART,
        payload: {
            id : id
        }
    }
}

export const adjustQty = (id,value)=>{

    return{
        type: ADJUST_QTY,
        payload: {
            id : id,
            qty: value
        }
    }
}

