import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Search from './components/search';
import Products from './components/products';
import { Container, Row, Col} from 'reactstrap';
import { ProductsProvider } from './contexts/products';


function App() {
  return (
    <ProductsProvider>
      <div className="App">
        <header className="App-header">
          <Container fluid>
            <Row>
              <Col sm={2}><img className="logo" src="https://www.lider.cl/images/logo.svg" alt="logo"/></Col>
              <Col sm={8}><Search /></Col>
              <Col sm={2}>
                <span className="local">
                  <a href="https://www.lider.cl/tiendas" className="juntosnoscuidamos" id="prehome_header_link_locales">
                    <span></span>
                    Locales y Horarios
                  </a>
                </span>                
              </Col>
            </Row>
          </Container>
        </header>
        <Products />
      </div>
    </ProductsProvider>
  );
}

export default App;
