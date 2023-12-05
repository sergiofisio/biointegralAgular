import { Component } from '@angular/core';
import { ScreenSizeService } from 'src/app/screen-size.service';

@Component({
  selector: 'app-nowus',
  templateUrl: './nowus.component.html'
})
export class NowusComponent {
  isSmallScreen$ = this.ScreenSizeService.isSmallScreen$;

  constructor(private ScreenSizeService: ScreenSizeService) {

  }
}
