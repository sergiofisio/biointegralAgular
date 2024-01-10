import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html'
})
export class Step4Component {
  @Input() questions!: any;
}
