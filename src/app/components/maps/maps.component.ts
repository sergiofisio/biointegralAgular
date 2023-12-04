import { Component } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html'
})
export class MapsComponent {
  locals = [
    {
      city: 'São Paulo',
      coordinates: {
        lat: -23.567995,
        lng: -46.646394
      },
      address: {
        local: 'Livance',
        street: 'Rua Cincinato Braga',
        number: 340,
        complement: '10º andar'
      }
    },
    {
      city: 'São Bernardo do campo',
      coordinates: {
        lat: -23.691863,
        lng: -46.549258
      },
      address: {
        local: 'Espaço Damaru',
        street: 'Rua José Versolato',
        number: 111,
        complement: 'bloco B - sala 3414'
      }
    }
  ]
}
