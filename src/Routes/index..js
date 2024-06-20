
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const ProductList = lazy(() => import('../pages/ProductList'));
const Cart = lazy(() => import('../pages/Cart'));
// import ProductList from "../pages/ProductList";
// import Cart from "../pages/Cart";

const LayoutsRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route exact path="/" element={<ProductList />}></Route>
                <Route exact path="/cart" element={<Cart />}></Route>
            </Routes>
        </Suspense>
    )
}

export default LayoutsRoutes;