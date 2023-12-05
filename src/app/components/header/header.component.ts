import { Component } from '@angular/core';
import { ScreenSizeService } from './../../screen-size.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isSmallScreen$ = this.ScreenSizeService.isSmallScreen$;

  constructor(private ScreenSizeService: ScreenSizeService) {

  }
}
