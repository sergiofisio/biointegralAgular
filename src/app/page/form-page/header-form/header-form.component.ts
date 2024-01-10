import { Component } from '@angular/core';
import { ScreenSizeService } from './../../../services/screenSize/screen-size.service';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html'
})
export class HeaderFormComponent {
  isSmallScreen$ = this.ScreenSizeService.isSmallScreen$;

  constructor(private ScreenSizeService: ScreenSizeService) {

  }
}
