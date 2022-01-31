import { Loader } from '@googlemaps/js-api-loader';

import React from 'react';
import { Container, Content } from './styles';

export default function Map() {
  const loader = new Loader({
    apiKey: 'AIzaSyCVBN9dQpTf7jcmB8_u4h4pvQ0YlGB1g4E',
    version: 'weekly',
  });

  loader.load().then(() => {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -23.531615, lng: -46.600925 },
      zoom: 8,
      disableDefaultUI: true,
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
