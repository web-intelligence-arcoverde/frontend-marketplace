import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marketplace from './pages/Marketplace';

import Market from './pages/Market';

import Home from './pages/Home';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import './styles/global.css';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/market/:id" element={<Market />} />

        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
