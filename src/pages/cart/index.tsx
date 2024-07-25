import React, { useContext } from 'react'
import { CartContext, CartContextType, CartItem } from '../../context/CartContext'
import { Button, Stack } from '@mui/material'
import Divider from '@mui/material/Divider';

function List() {

  const { cart, removeFromCart, getTotalPrice, emptyCart, increaseQuantity, decreaseQuantity } = useContext(CartContext) as CartContextType


  const remove = (id: number) => {
    removeFromCart(id)
  }


  return <>

    <h3>Total Price: {getTotalPrice().toFixed(2)}</h3>
    <Divider />
    {
      cart.length > 0 && <Button onClick={emptyCart}>Empty Cart</Button>
    }
    <Divider />

    <ul>
      {
        cart.map((item: CartItem) => {
          return <Stack key={item.id} justifyContent="space-evenly">
            <div style={{ padding: 20 }}>{item.name} - {item.unitPrice.toFixed(2)} * {item.quantity} = {(item.unitPrice * item.quantity!).toFixed(2)}
              
              <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
              <Button onClick={() => increaseQuantity(item.id)}>+</Button>
             
              <Button sx={{ marginLeft: 10 }} variant="contained" color="error" onClick={() => remove(item.id)}>Remove</Button>
            </div>
            <Divider />
          </Stack>
        })
      }
    </ul>

  </>
}

export default List