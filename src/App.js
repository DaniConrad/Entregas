import './App.css';
import NavbarD from './components/NavbarD';
import ItemListContainer from './components/Cards/ItemListContainer';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarD />
      </header>
      <section className='m-3'>
         <ItemListContainer />
      </section>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
