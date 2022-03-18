import './App.css';
import NavbarD from './components/NavbarD.js';
import RenderCards from './components/Logic.js';
import {Container} from 'react-bootstrap';

let stock = 0;
const initial = 1;
const onAdd = (count) =>{
  console.log(`Se agregan ${count} al carrito`);
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarD />
      </header>
      <section className='m-3'>
        <Container >
          <RenderCards 
          stock={stock}
          initial={initial}
          onAdd={onAdd}
          />
        </Container>
      </section>
    </div>
  );
}

export default App;
