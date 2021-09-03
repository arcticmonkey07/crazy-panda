import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Countries from './Components/Countries/Countries';
import Pagination from './Components/Pagination/Pagination';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(50);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await axios.get('https://restcountries.eu/rest/v2/all');
      setCountries(res.data);
      setLoading(false);
    };

    getCountries();
  }, []);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const nextPage = () => setCurrentPage( prev => prev + 1);
  const prevPage = () => setCurrentPage( prev => prev - 1);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <Countries countries={currentCountry} loading={loading} />
      <Pagination currentPage={currentPage} paginate={paginate} countriesPerPage={countriesPerPage} totalCountries={countries.length} />

      <button className='btn btn-primary' onClick={prevPage}>Prev Page</button>
      <button className='btn btn-primary ms-2' onClick={nextPage}>Next Page</button>
    </div>
  );
}

export default App;
