import React from 'react';
import './Pagination.css'

const Pagination = ({ limit, totalProducts, paginate }) => {
  const pageCount = [];

  for (let i = 1; i <= Math.ceil(totalProducts / limit); i++) {
    pageCount.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageCount.map(number => (
          <li key={number} >
            <a onClick={() => paginate(number)} href='/#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;