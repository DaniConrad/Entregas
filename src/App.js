import './App.css';
import NavbarD from './components/Navbar/NavbarD';
import ItemListContainer from './components/Cards/ItemListContainer';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import Filter from './components/Filter/Filter'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error404 } from './components/Error 404/Error404';
import Footer from './components/Footer/Footer';
import { CartContext, CartProvider } from './Context/CartContext';
import { useState } from 'react';
import { Cart } from './components/Cart/Cart';

function App() {

  

  return (
    <CartProvider>
      <div >
          <BrowserRouter>
          <div className="App">
            <NavbarD />
            
              <Routes>
                <Route path='/' element={<ItemListContainer />}  />
                <Route path='/products' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:itemId' element={ <ItemDetailContainer/> } />
                <Route path='/cart' element={<Cart/>} />

                <Route path='*' element={ <Error404 /> } />
              </Routes>
          </div>
              <Footer />
            </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
