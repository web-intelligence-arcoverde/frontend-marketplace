/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Sidebar from './components/sidebar/index';
import Cadastro from './pages/cadastro/index';
import Checkout from './pages/checkout/index';
import PetShop from './pages/petshop/index';
import Home from './pages/home';
import './styles/global.css';

function Router(){
  return ( 
<>
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/petshop/:id' element={<PetShop/>} />
      <Route exact path='/checkout' element={<Checkout/>} />
      <Route exact path='/cadastro' element={<Cadastro/>} />
      <Sidebar />
    </Routes>
  </BrowserRouter>
</>
  );
};
export default Router
