import React, { useContext, useState } from 'react';
import { Container } from './styles';

import { WeatherContext } from '../../contexts/WeatherContext';

export default function SearchBar() {
  const [location, setLocation] = useState('');

  const { getCurrentCity } = useContext(WeatherContext);

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
        <button
          type='submit'
          className='search-button'
          disabled={!location ? true : false}
        >
          Ir
        </button>
      </label>
    </Container>
  );
}
