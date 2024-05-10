import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LayoutsRoutes from '../Routes/index.'
import { Box } from '@mui/material'
import Container from '@mui/material/Container';

const index = () => {
    return (
        <Box sx={{ height: "100vh", width: "100%" }}>
            <div style={{ height: "11vh" }}>
                <Header />
            </div>
            <div style={{ width: "100%", height: "83vh", overflowY: "auto" }}>
                <Container maxWidth="xl">
                    <LayoutsRoutes />
                </Container>
            </div>
            <div style={{ height: "6vh" }}>
                <Footer />
            </div>
        </Box>
    )
}

export default index
