import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';

import { WeatherContext } from '../../contexts/WeatherContext';

export default function SearchBar() {
  const [location, setLocation] = useState('');
  const { getCurrentCity } = useContext(WeatherContext);

  useEffect(() => {
    const btn = document.querySelector('.search-button');
    if (location === '') {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  }, [location]);

  const onSubmit = (e) => {
    e.preventDefault();
    getCurrentCity(location);
    setLocation('');
  };

  return (
    <Container onSubmit={onSubmit}>
      <label htmlFor=''>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type='text'
          placeholder='Procurar local...'
        />
      </label>
      <button type='submit' className='search-button'>
        Submit
      </button>
    </Container>
  );
}
