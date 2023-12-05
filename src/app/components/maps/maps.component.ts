import { Component } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screenSize/screen-size.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html'
})
export class MapsComponent {
  isSmallScreen$ = this.ScreenSizeService.isSmallScreen$;

  constructor(private ScreenSizeService: ScreenSizeService) {

  }

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
      city: 'São Bernardo do Campo',
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
