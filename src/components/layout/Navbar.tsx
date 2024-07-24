import { AppBar, Button, Stack } from '@mui/material'
import {  Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {



  return <>
    <AppBar position="static">
      <Stack direction="row" justifyContent="space-evenly" sx={{padding:"1%"}}>
        <Link to="/"><Typography variant="h3">Home</Typography></Link>
        <Link to="/products"><Typography variant="h3">Products</Typography></Link>
      </Stack>

    </AppBar>
  </>
}

export default Navbar