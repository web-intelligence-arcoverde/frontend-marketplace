import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import Checkout from './pages/Checkout';
import SignUp from './pages/SignUp';
import Market from './pages/Market';
import './styles/global.css';
import SignIn from './pages/SignIn';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/marketplace" element={<Marketplace />} />

        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/signup" element={<SignUp />} />

        <Route exact path="/market/:id" element={<Market />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
