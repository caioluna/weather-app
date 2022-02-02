import React, { useContext, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

import { Container, Content } from './styles';
import { WeatherContext } from '../../contexts/WeatherContext';

export default function Map() {
  const { getCurrentMarkerLocation } = useContext(WeatherContext);

  const mapsKey = import.meta.env.VITE_MAPS_API_KEY;

  const loader = new Loader({
    apiKey: mapsKey,
    version: 'weekly',
  });

  loader.load().then(() => {
    google.maps.event.addDomListener(window, 'load', initMap);
  });

  const initLocation = { lat: -23.5316, lng: -46.6009 };

  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: initLocation,
      zoom: 8,
      disableDefaultUI: true,
    });

    let marker = new google.maps.Marker({
      position: initLocation,
      map: map,
    });

    map.addListener('click', (event) => {
      const latLngValue = event.latLng.toUrlValue(4);

      marker.setPosition(event.latLng);

      getCurrentMarkerLocation(latLngValue);
    });
  }

  return (
    <Container>
      <Content>
        <div id='map'></div>
      </Content>
    </Container>
  );
}
