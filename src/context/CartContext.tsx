import { createContext, useState } from "react";


export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    emptyCart: () => { }
})


export const CartProvider = ({ children }: any) => {

    //Öncelikle global bir state oluşturuyoruz.
    const [cart, setcart] = useState<CartItem[]>([])


    //addToCart, removeFromCart, clearCart gibi fonksiyonlarımızı oluşturuyoruz.

    const addToCart = (item: CartItem) => {

        //cart item control
        let cartItem = cart.find(cart => cart.id == item.id)

        if (cartItem) {
            cartItem.quantity = cartItem.quantity! + 1
            setcart([...cart])
        }
        else {
            item.quantity = 1
            setcart([...cart, item])
        }

    }

    const removeFromCart = (id: number) => {
        let filteredCartItems = cart.filter(cart => cart.id != id)
        setcart(filteredCartItems)
    }

    const emptyCart = () => {
        setcart([])
    }


    return <CartContext.Provider value={{ cart, addToCart, removeFromCart, emptyCart }}>
        {children}
    </CartContext.Provider>

}




export type CartContextType = {
    cart: CartItem[],
    addToCart: (item: CartItem) => void,
    removeFromCart: (id: number) => void,
    emptyCart: () => void
}


export interface CartItem {
    id: number,
    name: string,
    unitPrice: number,
    quantity?: number
}
