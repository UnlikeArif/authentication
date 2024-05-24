import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import CardContent from '@mui/material/CardContent';
import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'
import { useDispatch, useSelector } from 'react-redux';
import { updateCartList } from '../../redux/Slices/ProductSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const ProductCart = ({ product }) => {
    const dispatch = useDispatch();
    const { cartList } = useSelector((state) => state.product)


    const isAddtocartview = () => {
        if (cartList.length > 0) {
            return cartList.find((item) => item.id === product.id);
        } else {
            return false;
        }
    }

    const addtoCart = (Product) => {
        let add_QtyProducts = { ...Product, qty: 1 }
        dispatch(updateCartList([...cartList, add_QtyProducts]));
    }

    const increaseClick = (product) => {
        let QtyUpdateArr = cartList.map((val) => {
            if (val.id === product.id) {
                return {
                    ...val, qty: val.qty + 1
                }
            }
            return val;
        })
        dispatch(updateCartList(QtyUpdateArr));
    }

    const descreaseClick = (product) => {

        let cartArr = JSON.parse(JSON.stringify([...cartList]))
        let cartIndex = cartArr.findIndex((val) => val.id === product.id);
        if (cartIndex !== -1) {
            if (cartArr[cartIndex].qty - 1 == 0) {
                cartArr.splice(cartIndex, 1);
            } else {
                cartArr[cartIndex].qty = cartArr[cartIndex].qty - 1
            }

            dispatch(updateCartList([...cartArr]));
        }
    }

    return (
        <Card >
            <CardContent sx={{ border: "1px solid #1976d2", borderTopRightRadius: "10%", borderTopLeftRadius: "10%" }}>
                <Zoom>
                    <img src={product.product_img_url} alt="product img" style={{ width: '100%', height: "150px" }} />
                </Zoom>
            </CardContent>
            <CardContent sx={{ border: "1px solid #1976d2", borderBottomLeftRadius: "20%", borderBottomRightRadius: "20%" }}>
                <Typography variant={'p'} sx={{ display: "flex", justifyContent: "center" }}>{product.product_name}</Typography>
                <Typography variant={'p'} sx={{ display: "flex", justifyContent: "center" }}>₹ {product.product_price}</Typography>
                {isAddtocartview() ? (
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <Button variant='contained' size="small" color='error' style={{ minWidth: "20px", padding: "10px", borderRadius: "50%" }} onClick={() => descreaseClick(product)}><RemoveIcon fontSize="small" /></Button>
                        <span style={{ width: "20px", border: "1px solid #1976d2", padding: "7px", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px 10px" }}>{isAddtocartview().qty}</span>
                        <Button variant='contained' size="small" style={{ minWidth: "20px", padding: "10px", borderRadius: "50%" }} onClick={() => increaseClick(product)}><AddIcon fontSize="small" /></Button>
                    </Box>
                ) : (
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <Button color="primary" variant="contained" size='small' onClick={() => addtoCart(product)}>Add</Button>
                    </Box>
                )}

            </CardContent>
        </Card>
    )
}

export default ProductCart
