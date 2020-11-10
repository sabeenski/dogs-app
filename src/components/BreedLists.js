import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function List({ list }) {
  const [breedList, setBreedList] = useState();
  const [sortType, setSortType] = useState('asc');

  useEffect(() => {
    setBreedList(list);
  }, [list]);

  const handleInputChange = (e) => {
    let currentList = []; // Variable to hold the original version of the list

    let newList = []; // Variable to hold the filtered list before putting into state

    if (e.target.value !== '') {
      currentList = list;
      newList = currentList.filter((breed) =>
        breed.toLowerCase().includes(e.target.value.toLowerCase())
      );
    } else {
      newList = list;
    }
    setBreedList(newList);
  };

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  const sorted =
    breedList &&
    breedList.sort((a, b) => {
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
              <option value='asc'>Sort By</option>
              <option value='asc'>Alphabetical A-Z</option>
              <option value='desc'>Alphabetical Z-A</option>
            </select>
          </div>
        </section>
      </div>
      <div className='list'>
        <section>
          {sorted &&
            sorted.map((breed, index) => (
              <li key={index}>
                <Link to={breed}>{breed}</Link>
              </li>
            ))}
        </section>
      </div>
    </div>
  );
}

export default List;
