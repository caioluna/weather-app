import React from 'react';
import { Container, Content, Data } from './styled';

export default function LocationItem() {
  return (
    <>
      <Container>
        <Content>
          <p>London</p>
          <h1>
            29<span>°</span>
          </h1>
          <h3>Cloudy</h3>
          <Data>
            <table>
              <tbody>
                <tr>
                  <td>
                    <span className='icon'>o</span> Wind
                  </td>
                  <td className='separator'>|</td>
                  <td>10 km/h</td>
                </tr>
                <tr>
                  <td>
                    <span className='icon'>o</span> Hum
                  </td>
                  <td className='separator'>|</td>
                  <td>54%</td>
                </tr>
              </tbody>
            </table>
          </Data>
        </Content>
      </Container>
    </>
  );
}
