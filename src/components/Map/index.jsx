import { Loader } from '@googlemaps/js-api-loader';

import React from 'react';
import { Container, Content } from './styles';

export default function Map() {
  const myLocation = { lat: -23.531615, lng: -46.600925 };

  const loader = new Loader({
    apiKey: 'AIzaSyCVBN9dQpTf7jcmB8_u4h4pvQ0YlGB1g4E',
    version: 'weekly',
  });

  loader.load().then(() => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: myLocation,
      zoom: 8,
      disableDefaultUI: true,
    });

    let marker = new google.maps.Marker({
      position: myLocation,
      map: map,
    });

    map.addListener('click', (event) => {
      marker.setPosition(event.latLng);

      // const latLng = JSON.stringify(event.latLng.toJSON(), null, 2);
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
