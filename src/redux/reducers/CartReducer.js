import {
    ADD_TO_CART,
    ADJUST_QTY,
    REMOVE_FROM_CART
} from "../action-types";

const initialState = {
    cart: localStorage.getItem("cart-items")? JSON.parse(localStorage.getItem("cart-items")) : []
}

const CartReducer = (state = initialState, action) => {


    const {
        payload,
        type
    } = action;


    switch (type) {

        case ADD_TO_CART: {
            //get items data
            //check item is in cart already

            const inCart = state.cart.find((item) => item.id === payload.id ? true : false)

                const cartLoad = inCart ? state.cart.map(
                                (item) => item.id === payload.id ? {
                                    ...item,
                                    qty: item.qty + 1
                                } : item)
                                :
                                [...state.cart, {
                                    ...payload,
                                    qty: 1
                                }]
                
                localStorage.setItem('cart-items', JSON.stringify(cartLoad))

            return {
                ...state,

                cart: cartLoad
            }

        }

        case REMOVE_FROM_CART:

            const updatedCart = state.cart.filter((item) => item.id !== payload.id)
            localStorage.setItem('cart-items', JSON.stringify(updatedCart))
            return {
                ...state,
                cart: updatedCart
            }


        case ADJUST_QTY:
            const updatedCart2 = state.cart.map((item) => item.id === payload.id ? {
                                ...item,
                                qty: +payload.qty,
                                }
                                    :
                                    item
                                )

            localStorage.setItem('cart-items', JSON.stringify(updatedCart2))
            
            return {
                ...state,
                cart: updatedCart2
            }

        default:
            return state;
    }

}

export default CartReducer;