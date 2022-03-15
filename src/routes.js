import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Marketplace from './pages/Marketplace';

import Home from './pages/Home';

import './styles/global.css';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/marketplace" element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
