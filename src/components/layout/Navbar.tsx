import { AppBar, Button, Stack } from '@mui/material'
import {  Typography } from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext, CartContextType } from '../../context/CartContext'

function Navbar() {

  const {cart} = useContext(CartContext) as CartContextType

  return <>
    <AppBar position="static">
      <Stack direction="row" justifyContent="space-evenly" sx={{padding:"1%"}}>
        <Link style={{color:"white",textDecoration:"none" }} to="/"><Typography variant="h5">Home</Typography></Link>
        <Link style={{color:"white",textDecoration:"none" }} to="/products"><Typography variant="h5">Products</Typography></Link>

        <Link style={{color:"white",textDecoration:"none" }} to="/cart">
        <Typography variant="h5">Cart<span style={{color:"red"}}>({cart.length})</span></Typography>
        </Link>
     
      </Stack>
    </AppBar>
  </>
}

export default Navbar