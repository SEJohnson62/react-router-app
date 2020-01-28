import React from 'react';
const Companies = ({ companies })=> {
  return (
    <div>
      <h1>Companies</h1>
      <ul>
        {
          companies.map( company => {
            return (
              <li key={ company.id }> { company.name }</li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Companies;
