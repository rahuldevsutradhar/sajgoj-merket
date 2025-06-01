import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route, RouterProvider,
} from "react-router-dom";
import Home from './assets/pages/Home';
import Shop from './assets/pages/Shop';
import Cart from './assets/pages/Cart';
import CheckOut from './assets/pages/CheckOut';
import Login from './assets/pages/Login';
import Product from './assets/pages/Product';
import Error from './assets/pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} >   </Route>
    <Route path="/shop" element={<Shop />} >   </Route>
    <Route path="/product" element={<Product />} >   </Route>
    <Route path="/cart" element={<Cart />} >   </Route>
    <Route path="/checkOut" element={<CheckOut />} >   </Route>
    <Route path="/login" element={<Login />} >   </Route>
    <Route path="/*" element={<Error />} >   </Route>
    </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App