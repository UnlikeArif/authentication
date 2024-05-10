import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, Grid } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
const Header = () => {
    const [productModal, setProductModal] = useState(false);
    const [product, setProduct] = useState({
        product_name: "",
        product_img_url: "",
        product_price: ""
    });
    const [error, setError] = useState({
        product_name: false,
        product_img_url: false,
        product_price: false
    })
    // const [scroll, setScroll] = React.useState < DialogProps['scroll'] > ('paper');

    const handleClose = () => {
        setProductModal(false);
    }

    const handleFormInputChange = (event) => {
        const { name, value } = event.target;

        setProduct({
            ...product,
            [name]: value
        });

        if (value.trim() === '') {
            setError({
                ...error,
                [name]: true
            });
        } else {
            setError({
                ...error,
                [name]: false
            });
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form validation
        let isValid = true;
        for (const key in product) {
            if (product[key].trim() === '') {
                isValid = false;
                setError({
                    ...error,
                    [key]: true
                });
            }
        }

        // If form is valid, submit the form
        if (isValid) {
            // Your form submission logic goes here
            console.log("Form submitted:", product);
        }
    }
    return (
        <>
            <Box sx={{ flexGrow: 1, width: "100%" }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MarKet Place
                        </Typography>
                        <Button color="error" variant="contained" sx={{ marginRight: 3 }} onClick={() => setProductModal(true)}>Add Product</Button>
                        <Badge badgeContent={1} color="error">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </Toolbar>
                </AppBar>
            </Box>
            {productModal && (
                <Dialog
                    open={productModal}
                    onClose={handleClose}
                    fullWidth={'md'}
                >
                    <DialogTitle>Add Product</DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Product Name" id="fullWidth" name="product_name" onChange={(event) => handleFormInputChange(event)} value={product.product_name} error={error.product_name} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Product image Url" id="fullWidth" name="product_img_url" onChange={(event) => handleFormInputChange(event)} value={product.product_img_url} error={error.product_img_url} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Product Price" id="fullWidth" name="product_price" onChange={(event) => handleFormInputChange(event)} value={product.product_price} error={error.product_price} />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button variant='contained' color='error' onClick={handleClose}>Close</Button>
                            <Button type="submit" variant='contained' color='primary'>Save</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            )}
        </>
    )
}

export default Header
