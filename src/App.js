import './App.css';
import NavbarD from './components/NavbarD';
import ItemListContainer from './components/Cards/ItemListContainer';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavbarD />
          <Routes>
            <Route path='/' element={<ItemListContainer />}  />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:itemId' element={ <ItemDetailContainer/> } />

          {/* <Route path='*' element={ Hacer el 404} /> */}
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
