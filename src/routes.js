import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import Checkout from './pages/Checkout';
import SignUp from './pages/SignUp';
import Market from './pages/Market';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

import './styles/global.css';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />

        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/market/:id" element={<Market />} />

        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
