import React from 'react'
// import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
// import ProductCart from './Components/ProductCart';
import { useSelector } from 'react-redux';
import ProductCart from './Components/ProductCart';

const ProductList = () => {
    const { productsList } = useSelector((state) => state.product);
    return (
        <Box sx={{ minHeight: "79vh", padding: "10px" }} >
            <Typography variant={'h5'}>Product List</Typography>
            <Box sx={{ width: "100%", marginTop: "10px", display: "flex", overflowX: "auto" }}>
                {productsList.length > 0 && productsList.map((product, ind) => (
                    <Box key={ind} sx={{ width: "210px", marginRight: "10px" }}>
                        <ProductCart product={product} />
                    </Box>
                ))}
            </Box>
        </Box >
    )
}

export default ProductList
