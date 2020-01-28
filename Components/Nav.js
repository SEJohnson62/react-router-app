import React from 'react';

const Nav = ({ view, setView, companies, products })=> {
  return (
    <nav>
      <a href='#' className={ view === 'products' ? 'selected': ''} onClick={()=> setView('products')}>Products ({ products.length })</a>
      <a href='#' className={ view === 'companies' ? 'selected': ''} onClick={()=> setView('companies')}>Companies ({ companies.length })</a>
    </nav>
  );
}

export default Nav;
