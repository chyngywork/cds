import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import useRoutes from './routes';
import Header from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const routes = useRoutes()
  return (
     <Router>
       <Container fluid>
       <Header/>
      <Container >
      {routes}
      </Container>
       </Container>

     </Router>
  );
}

export default App;
