import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {

  constructor() { }

  @Input() text!: string;
  @Input() class?: string;
  @Input() click!: string;

  handleClick() {
    console.log(this.click);

    window.open(this.click, '_blank');
  }

}
