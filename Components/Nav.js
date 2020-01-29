import React from 'react';

const Nav = ({ view, setView, companies, products })=> {
  return (
    <nav>
      <a href='#products' className={ view === 'products' ? 'selected': ''}>
      Products ({ products.length })</a>
      <a href='#companies' className={ view === 'companies' ? 'selected': ''}>
      Companies ({ companies.length })</a>
    </nav>
  );
}

export default Nav;
