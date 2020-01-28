import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Products from './Components/Products.js';
import Companies from './Components/Companies.js';
import Nav from './Components/Nav.js';
import './App.css';

const API = 'https://acme-users-api-rev.herokuapp.com/api';

function App() {
  const [ products, setProducts ] = useState([]);
  const [ companies, setCompanies ] = useState([]);
  const [ view, setView ] = useState('products');

  useEffect(()=> {
    axios.get(`${API}/companies`)
      .then( response => setCompanies( response.data ))
  }, []);

  useEffect(()=> {
    axios.get(`${API}/products`)
      .then( response => setProducts( response.data ))
  }, []);

  return (
    <div>
      <Nav
        products={ products }
        companies={ companies }
        view={ view }
        setView={ setView }
      />
      <main>
        { view === 'products' && <Products products={ products }/> }
        { view === 'companies' && <Companies companies={ companies }/> }
      </main>
    </div>
  );
}

export default App;
