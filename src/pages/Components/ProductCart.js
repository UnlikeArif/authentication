import { Box, Button, Card, Typography } from '@mui/material'
import { React, useCallback } from 'react'
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
            return cartList.find((item) => item?.id === product?.id);
        } else {
            return false;
        }
    }

    const itemToCart = useCallback((product, Qty) => {
        let addToCartItem = [];
        if (Qty != null) {
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

        } else {
            let add_QtyProducts = { ...product, qty: 1 }
            addToCartItem = [...cartList, add_QtyProducts];
        }
        dispatch(updateCartList(addToCartItem));
    }, [cartList])

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
                        <Button variant='contained' color='error' sx={{ height: "30px", minWidth: "30px !important", padding: "4px", borderRadius: "50%" }} onClick={() => itemToCart(product, false)}><RemoveIcon /></Button>
                        <span style={{ width: "30px", height: "30px", border: "1px solid #1976d2", padding: "7px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px 10px" }}>{isAddtocartview().qty}</span>
                        <Button variant='contained' sx={{ height: "30px", minWidth: "30px !important", padding: "4px", borderRadius: "50%" }} onClick={() => itemToCart(product, true)}><AddIcon /></Button>
                    </Box>
                ) : (
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <Button color="primary" variant="contained" size='small' onClick={() => itemToCart(product, null)}>Add</Button>
                    </Box>
                )}

            </CardContent>
        </Card >
    )
}

export default ProductCart
