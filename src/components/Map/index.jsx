import React, { useContext, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Container, Content } from './styles';
import { WeatherContext } from '../../contexts/WeatherContext';

export default function Map() {
  const { getCurrentMarkerLocation } = useContext(WeatherContext);
  const [markerLocation, setMarkerLocation] = useState({
    lat: -23.5316,
    lng: -46.6009,
  });

  const mapsKey = import.meta.env.VITE_MAPS_API_KEY;
  const myLatLng = markerLocation;

  const loader = new Loader({
    apiKey: mapsKey,
    version: 'weekly',
  });

  loader.load().then(() => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 8,
      disableDefaultUI: true,
    });

    let marker = new google.maps.Marker({
      position: markerLocation,
      map: map,
    });

    map.addListener('click', (mapsMouseEvent) => {
      const lat = Number(mapsMouseEvent.latLng.lat().toFixed(4));
      const lng = Number(mapsMouseEvent.latLng.lng().toFixed(4));

      setMarkerLocation({
        lat: lat,
        lng: lng,
      });

      marker.setPosition(markerLocation);
      getCurrentMarkerLocation(`${lat},${lng}`);
      marker.setPosition('');
    });
  });

  return (
    <Container>
      <Content>
        <div id='map'></div>
      </Content>
    </Container>
  );
}
