import React, { useContext, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

import { Container, Content } from './styles';
import { WeatherContext } from '../../contexts/WeatherContext';

export default function Map() {
  const { getCurrentMarkerLocation, centerMap } = useContext(WeatherContext);

  const mapsKey = 'AIzaSyD-X4W2FqbwXP2JLdj7WoIskCoVS_yCKK4';

  useEffect(() => {
    handleCenterMap();
  }, [centerMap]);

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
      marker.setPosition(event.latLng);
      getCurrentMarkerLocation(event.latLng.toUrlValue(4));
    });
  }

  function handleCenterMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: centerMap,
      zoom: 8,
      disableDefaultUI: true,
    });

    const marker = new google.maps.Marker({
      position: centerMap,
      map: map,
    });
    map.addListener('click', (event) => {
      marker.setPosition(event.latLng);
      getCurrentMarkerLocation(event.latLng.toUrlValue(4));
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
