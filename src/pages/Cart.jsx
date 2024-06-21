import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import { updateCartList, updatecheckOut } from '../redux/Slices/ProductSlice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cartList } = useSelector((state) => state.product);
    var totalAmt = 0;
    cartList.map((val) => {
        let otyPrice = val.qty * val.product_price;
        totalAmt += otyPrice;
    });
    const itemToCart = useCallback((product, Qty) => {
        let addToCartItem = [];
        if (Qty === true) {
            let newArr = [...cartList];
            let QtyUpdateArr = newArr.map((val) => {
                if (val?.id === product.id) {
                    return {
                        ...val, qty: val.qty + 1
                    }
                } else {
                    return val;
                }
            })
            addToCartItem = QtyUpdateArr;
        } else {
            let cartArr = JSON.parse(JSON.stringify([...cartList]))
            let cartIndex = cartArr.findIndex((val) => val.id === product.id);
            if (cartIndex !== -1) {
                if (cartArr[cartIndex].qty - 1 == 0) {
                    cartArr.splice(cartIndex, 1);
                } else {
                    cartArr[cartIndex].qty = cartArr[cartIndex].qty - 1
                }
                addToCartItem = [...cartArr];
            }
        }
        dispatch(updateCartList(addToCartItem));
    }, [cartList])

    const checkOut = () => {
        const random_number = Math.floor(Math.random() * 10) + 1;
        dispatch(updatecheckOut({
            orderId: random_number,
            name: "test",
            phoneNumber: "9087617862",
            address: "kanagi Street Alangudi",
            paymentMethod: "cd",
            itemslist: cartList
        }))
        toast.success('Order Placed Successfully');
        setTimeout(() => {
            dispatch(updateCartList([]));
            navigate('/');
        }, 2000)
    }
    return (
        <Box sx={{ minHeight: "79vh", padding: "10px" }} >
            <Grid container>
                <Grid item sm={12} md={8} p={2}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant={'p'}>Cart Items</Typography>
                        <Typography variant={'p'} sx={{ cursor: "pointer", color: "red" }} onClick={() => {
                            dispatch(updateCartList([]));
                            navigate('/');
                        }}>Remove All</Typography>
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
                                                    <Button variant='contained' size="small" color='error' sx={{ height: "30px", minWidth: "30px !important", padding: "4px", borderRadius: "50%" }} onClick={() => itemToCart(val, false)} ><RemoveIcon fontSize="small" /></Button>
                                                    <span style={{ width: "30px", height: "30px", border: "1px solid #1976d2", padding: "7px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px 10px" }}>{val.qty}</span>
                                                    <Button variant='contained' size="small" sx={{ height: "30px", minWidth: "30px !important", padding: "4px", borderRadius: "50%" }} onClick={() => itemToCart(val, true)}><AddIcon fontSize="small" /></Button>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableHead>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item sm={12} md={4} p={2}>
                    <Box>
                        <Typography variant={'p'}>Order Summary</Typography>
                    </Box>
                    <Card sx={{ mt: 1 }}>
                        <CardContent>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant={'p'}>Total Amount</Typography>
                                <Typography variant={'p'}>₹ {totalAmt}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "end", marginTop: "5px" }}>
                                <Button variant='contained' onClick={checkOut}>CheckOut</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cart
