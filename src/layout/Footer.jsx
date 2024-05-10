import React from 'react'
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ height: "100% " }}>
            <Box sx={{ width: "100%", background: "#1976d2", height: "100% " }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="body2" >
                    {'Made with ❤️ by '}
                    <Link color="inherit" href="">
                        Mohamed Arif
                    </Link>{' '}
                    {new Date().getFullYear()}
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer
