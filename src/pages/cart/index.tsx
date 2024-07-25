import React, { useContext } from 'react'
import { CartContext, CartContextType, CartItem } from '../../context/CartContext'

function List() {

  const {cart} = useContext(CartContext) as CartContextType

  return <>
  <ul>
    {
      cart.map((item:CartItem) => {
        return <li>{item.name} - {item.unitPrice.toFixed(2)} * {item.quantity} = {(item.unitPrice * item.quantity!).toFixed(2)}</li>
      })
    }
  </ul>
  </>
}

export default List