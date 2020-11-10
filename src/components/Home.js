import React, { useState, useEffect } from 'react';
import List from './BreedLists';

function Home() {
  const [breedList, setBreedList] = useState([]);
  const fetchData = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await res.json();
    setBreedList(Object.keys(data.message));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <List list={breedList} />;
}

export default Home;
