import { Component } from '@angular/core';
import { ScreenSizeService } from 'src/app/screen-size.service';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html'
})
export class ApresentationComponent {

  isSmallScreen$ = this.ScreenSizeService.isSmallScreen$;

  navigateToWhatsApp() {
    window.location.href = 'https://api.whatsapp.com/message/QONW6E37X27CJ1?autoload=1&app_absent=0';
  }

  constructor(private ScreenSizeService: ScreenSizeService) {
    console.log(this.isSmallScreen$);

  }
}
