import './App.css';
import NavbarD from './components/NavbarD.js';
import RenderCards from './components/Logic.js';
import {Container} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarD />
      </header>
      <section className='m-3'>
        <Container >
          <RenderCards />
        </Container>
      </section>
    </div>
  );
}

export default App;
