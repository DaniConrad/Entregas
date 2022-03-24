import './App.css';
import NavbarD from './components/NavbarD';
import {Container} from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarD />
      </header>
      <section className='m-3'>
         <ItemListContainer />
      </section>
    </div>
  );
}

export default App;
