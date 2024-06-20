import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

const Cart = () => {
    const { cartList } = useSelector((state) => state.product)
    return (
        <Box sx={{ minHeight: "79vh", padding: "10px" }} >
            <Grid container>
                <Grid item sm={12} md={8}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant={'p'}>Cart Items</Typography>
                        <Typography variant={'p'} sx={{ cursor: "pointer" }}>Remove All</Typography>
                    </Box>
                    <TableContainer component={Paper} sx={{ mt: 1 }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                {cartList.map((val, ind) => {
                                    return (
                                        <TableRow key={ind}>
                                            <TableCell align="left">{ind + 1}</TableCell>
                                            <TableCell align="left">{val.product_name}</TableCell>
                                            <TableCell align="left">{val.qty}</TableCell>
                                            <TableCell align="left">₹ {val.product_price}</TableCell>
                                            <TableCell align="left">₹{val.qty * val.product_price}</TableCell>
                                            <TableCell align="left">
                                                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                                                    <Button variant='contained' size="small" color='error' style={{ minWidth: "20px", padding: "10px", borderRadius: "50%" }} ><RemoveIcon fontSize="small" /></Button>
                                                    <span style={{ width: "20px", border: "1px solid #1976d2", padding: "7px", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px 10px" }}>{val.qty}</span>
                                                    <Button variant='contained' size="small" style={{ minWidth: "20px", padding: "10px", borderRadius: "50%" }} ><AddIcon fontSize="small" /></Button>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableHead>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item sm={12} md={4}>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Cart
