import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {

    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (indexToRemove) => {
        setState({
            ...state,
            cart: state.cart.filter( (_items, index) => {
                if(index == indexToRemove ) {
                    return false
                }
                return true
            })
        });
    };

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: payload
        });
    };

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [
                ...state.orders, 
                payload
            ]
        });
    };

    const removeAllFromCart = () => {
        setState({
            ...state,
            cart: []
        })
    };

    return {
        state,
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        removeAllFromCart
    };

};

export default useInitialState;