import React from 'react';

import SearchBar from '../SearchBar';
import Weather from '../Weather';
import Map from '../Map';
import Forecast from '../Forecast';

import { Container, LogoArea, Footer } from './styles';

export default function Dashboard() {
  return (
    <>
      <LogoArea>
        <img
          src='https://adroitrobotics.com/wp-content/uploads/2019/10/logo_white.png'
          alt=''
        />
        <h1>| &nbsp; Weather</h1>
      </LogoArea>

      <Container>
        <SearchBar />
        <Weather />

        <Map />

        <Forecast />
      </Container>

      <Footer>
        Powered by&nbsp;
        <a href='https://www.weatherapi.com/' title='Free Weather API'>
          WeatherAPI.com
        </a>
      </Footer>
    </>
  );
}
