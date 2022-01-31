import React from 'react';
import { Container } from './styles';

export default function SearchBar() {
  return (
    <Container>
      <label htmlFor=''>
        <input type='text' placeholder='Procurar local...' />
      </label>
    </Container>
  );
}
