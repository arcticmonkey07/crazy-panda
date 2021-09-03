import React from 'react';
import './Pagination.css';

const Pagination = ({ countriesPerPage, totalCountries, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {
          pageNumbers.map(number => {
            let activeClass = currentPage === number ? 'active' : '';

            return (
              <li className='page-item' key={number}>
                <a href="!#" className={`page-link ${activeClass}`} onClick={() => paginate(number)}>
                  {number}
                </a>
              </li>
            );
          }
          )
        }
      </ul>
    </div>
  );
};

export default Pagination;