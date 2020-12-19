import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function List({ list }) {
  const [searchTerm, setsearchTerm] = useState('');
  const [sortType, setSortType] = useState('asc');

  const handleInputChange = (e) => {
    setsearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  const filteredList = list.filter((breed) =>
    breed.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sorted =
    filteredList &&
    filteredList.sort((a, b) => {
      const sortOrder = sortType === 'asc' ? 1 : -1;
      return sortOrder * a.localeCompare(b);
    });

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className='container '>
      <div className='jumbotron'>
        <section className='row'>
          <div className='col-xs-12 col-md-8'>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                className='form-control'
                placeholder='Search for the dog breeds...'
                id='query'
                onChange={handleInputChange}
              />
            </form>
          </div>
          <div className='col-xs-12 col-md-4'>
            <select
              className='custom-select form-control'
              onChange={handleSort}
            >
              <option value='asc'>Alphabetical A-Z</option>
              <option value='desc'>Alphabetical Z-A</option>
            </select>
          </div>
        </section>
      </div>
      <div>
        <section className='row'>
          {sorted &&
            sorted.map((breed, index) => (
              <div className='col-xs-12 col-sm-6 col-md-4'>
                <Link to={breed} key={index} className='hyperlink'>
                  <div key={index} className='card'>
                    <div className='card-body'>
                      <p className='card-text'>
                        <strong>{breed.toUpperCase()}</strong>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
}

export default List;
