import { Component, Input, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScreenSizeService } from 'src/app/services/screenSize/screen-size.service';
@Component({
  selector: 'app-local',
  templateUrl: './local.component.html'
})
export class LocalComponent {
  isSmallScreen$ = this.ScreenSizeService.isSmallScreen$;

  @Input() local!: {
    city: string,
    coordinates: {
      lat: number,
      lng: number
    },
    address: {
      local: string,
      street: string,
      number: number,
      complement: string
    }
  };

  mapUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private ScreenSizeService: ScreenSizeService) { }

  ngOnInit() {
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBjHw9J59KysKkh8EpHdSxRTQ6u3wv-ZKc&q=${this.local.coordinates.lat},${this.local.coordinates.lng}`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
