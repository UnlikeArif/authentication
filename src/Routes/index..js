
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ProductList = lazy(() => import('../pages/ProductList'));
const Cart = lazy(() => import('../pages/Cart'));
// import ProductList from "../pages/ProductList";
// import Cart from "../pages/Cart";

const LayoutsRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route exact path="/" element={<ProductList />}></Route>
                    <Route exact path="/cart" element={<Cart />}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default LayoutsRoutes;