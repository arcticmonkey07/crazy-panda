import React, { useState, useEffect } from 'react';
import './Countries.css';

const Countries = ({ countries, loading }) => {

  const [countriesSortData, setCountriesSortData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setCountriesSortData(countries);
  }, [countries]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const sortData = (field) => {
    setToggle(!toggle);
    if (toggle) {
      const countriesCopy = countries.concat();
      const sortCountries = countriesCopy.sort((a, b) => { return a[field] > b[field] ? 1 : -1; });
      setCountriesSortData(sortCountries);
    } else {
      const countriesCopy = countries.concat();
      const sortCountries = countriesCopy.sort((a, b) => { return a[field] < b[field] ? 1 : -1; });
      setCountriesSortData(sortCountries);
    }
  };

  const filtredCountries = countriesSortData.filter(country => {
    return country.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <form>
        <div className="form-group mb-3">
          <label className="mb-1">Search:</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter search..."
            onChange={(e) => { setValue(e.target.value); }}
          />
        </div>
      </form>

      <table className="table">
        <thead className="table-head">
          <tr>
            <th className="table-head-item" scope="col" onClick={() => { sortData('area'); }}>Area</th>
            <th className="table-head-item" scope="col">Flag</th>
            <th className="table-head-item" scope="col" onClick={() => { sortData('name'); }}>Country</th>
            <th className="table-head-item" scope="col" onClick={() => { sortData('capital'); }}>Capital</th>
            <th className="table-head-item" scope="col" onClick={() => { sortData('population'); }}>Population</th>
          </tr>
        </thead>
        <tbody>
          {
            filtredCountries.map((country, i) => (
              <tr key={country.numericCode}>
                <th scope="row">{country.area}</th>
                <td><img className='ml-2' src={country.flag} alt="flag" style={{ width: 25 }} /></td>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.population}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Countries;