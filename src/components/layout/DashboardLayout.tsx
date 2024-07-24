import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Container } from '@mui/material'

function DashboardLayout({ children }: any) {
    return <>

        <Navbar />
        <Container>
            {children}
        </Container>
        <Footer />


    </>
}

export default DashboardLayout