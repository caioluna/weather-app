import React from 'react';
import Dashboard from './components/Dashboard';
import Favorites from './components/Favorites';

import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <>
      <Dashboard />
      <Favorites />

      <GlobalStyle />
    </>
  );
}
