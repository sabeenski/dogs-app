import React, { useState, useEffect } from 'react';
import List from './BreedLists';

function DogsBreed() {
  const [state, setState] = useState([]);
  const fetchData = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await res.json();
    setState(Object.keys(data.message));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <List list={state} />;
}

export default DogsBreed;
