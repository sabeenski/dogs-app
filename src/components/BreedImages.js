import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BreedImages({ match }) {
  const { breedname } = match.params;
  const [selectedBreed, setSelectedBreed] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const fetchImage = async () => {
    const res = await fetch(`https://dog.ceo/api/breed/${breedname}/images`);
    const data = await res.json();
    setSelectedBreed(data.message);
    setSpinner(false);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className='container'>
      <section className='row'>
        <Link to='/' className='go-back-btn'>
          Go back
        </Link>
      </section>

      <section className='row'>
        {!spinner
          ? selectedBreed.map((item, index) => (
              <div
                key={index}
                className='col-xs-12 col-sm-6 col-md-4 image-container'
              >
                <img src={item} alt={`${breedname} dog`} className=''></img>
              </div>
            ))
          : 'Loading...'}
      </section>
    </div>
  );
}

export default BreedImages;
