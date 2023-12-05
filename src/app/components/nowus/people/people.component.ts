import { Component, Input } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screenSize/screen-size.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() register!: string;

  isSmallScreen$ = this.ScreenSizeService.isSmallScreen$;

  constructor(private ScreenSizeService: ScreenSizeService) {

  }
}
