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
import RootLayout from './assets/component/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout/>}>
           <Route path="" element={<Home />} />  
           <Route path="/shop" element={<Shop />} />   
           <Route path="/product" element={<Product />}/>  
           <Route path="/cart" element={<Cart />} />   
           <Route path="/checkOut" element={<CheckOut />} />   
           <Route path="/login" element={<Login />} />   
           <Route path="/*" element={<Error />} />   
    </Route>
    </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App