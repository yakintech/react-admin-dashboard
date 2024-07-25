import { createContext, useEffect, useState } from "react";


export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    emptyCart: () => { },
    getTotalPrice: () => 0
})


export const CartProvider = ({ children }: any) => {

    //Öncelikle global bir state oluşturuyoruz.
    const [cart, setcart] = useState<CartItem[]>([])


    const getTotalPrice = () => {
        let total = 0
        cart.forEach((item: CartItem) => {
            total = total + (item.unitPrice * item.quantity!)
        })
        return total
    }

    useEffect(() => {
      
        let cart = localStorage.getItem("cart")
        if (cart) {
            setcart(JSON.parse(cart))
        }


    }, [])
    


    //addToCart, removeFromCart, clearCart gibi fonksiyonlarımızı oluşturuyoruz.

    const addToCart = (item: CartItem) => {

        //cart item control
        let cartItem = cart.find(cart => cart.id == item.id)

        if (cartItem) {
            cartItem.quantity = cartItem.quantity! + 1
            setcart([...cart])
            localStorage.setItem("cart", JSON.stringify(cart))
        }
        else {
            item.quantity = 1
            setcart([...cart, item])
            localStorage.setItem("cart", JSON.stringify([...cart, item]))
        }

    }

    const removeFromCart = (id: number) => {
        let filteredCartItems = cart.filter(cart => cart.id != id)
        setcart(filteredCartItems)
        localStorage.setItem("cart", JSON.stringify(filteredCartItems))
    }

    const emptyCart = () => {
        setcart([])
        localStorage.removeItem("cart")
    }


    return <CartContext.Provider value={{ cart, addToCart, removeFromCart, emptyCart, getTotalPrice }}>
        {children}
    </CartContext.Provider>

}




export type CartContextType = {
    cart: CartItem[],
    addToCart: (item: CartItem) => void,
    removeFromCart: (id: number) => void,
    emptyCart: () => void
    getTotalPrice: () => number
}


export interface CartItem {
    id: number,
    name: string,
    unitPrice: number,
    quantity?: number
}
