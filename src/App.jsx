import React from 'react';
import Dashboard from './components/Dashboard';
import Favorites from './components/Favorites';

import { WeatherProvider } from './contexts/WeatherContext';
import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <WeatherProvider>
      <Dashboard />
      <Favorites />

      <GlobalStyle />
    </WeatherProvider>
  );
}
