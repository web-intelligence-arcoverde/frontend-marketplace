import React , { useEffect, useState }  from 'react';
import './style.css';
import { Dock } from 'react-dock';
import Product from '../product/list';


function sidebar() {
  const  [opened, setOpened ]= useState(false);

  useEffect(()=>{
    window.addEventListener('openCart', () => {
      setOpened(true);
    });
  },[]);


  return (
  <Dock
  position='right' 
  isVisible={opened}
  onVisibleChange={(visible)=>{setOpened(visible);}}
  >
    <div className='container h-100 pt-4 sidebar'> 
      <h5>Minha sacola (5)</h5>
      <div className='row products'>
        {[1,2,3,4,5,6,7,8,9].map(() => (<Product/>))} 
      </div>
      <div className='row footer align-items-end'>
        <div className='col-12 d-flex justify-content-between align-items-center'>
          <b className='d-inline-block'>Total</b>
          <h3 className='d-inline-block'>R$ 30,00</h3>
        </div>
        <button type='button' className='btn btn-block btn-lg btn btn-primary rounded-0 h-50 align-items-center' >Finalizar compra</button>
      </div>
    </div>
  </Dock>
  );
}

export default sidebar;