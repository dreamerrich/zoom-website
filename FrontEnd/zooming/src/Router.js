import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Product from './components/Products';
import Plans from './components/Plans';
import Resource from './components/Resource';

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="product" exact element={<Product />}></Route>
                    <Route path="plans" exact element={<Plans/>}></Route>
                    <Route path="resource" exact element={<Resource/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;