import React from "react";
import { useState } from "react";
import { getItemByID } from "./dummy-meals";

const CartContext = React.createContext({
    cartItems: {},
    numberOfItems: 0,
    cartTotal: 0,
    addItem: () => {}
});

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [numberOfItems, setNumberOfItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItem = (itemID, quantity) => {
        quantity = +quantity;
        let newCartItems = cartItems;
        if(!(itemID in cartItems))
            newCartItems[itemID] = 0;
        newCartItems[itemID] = newCartItems[itemID] + quantity;
        setCartItems(newCartItems);

        setNumberOfItems(numberOfItems + quantity);
    
        let item = getItemByID(itemID);
        setCartTotal(cartTotal + quantity*item['price']);
    }

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            numberOfItems: numberOfItems,
            cartTotal: cartTotal,
            addItem: addItem
        }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;