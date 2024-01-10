import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html'
})
export class Step2Component {
  @Input() questions!: any;

  simptomeSelected(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      this.questions.simptomes.value.push(target.value);
    } else {
      if (this.questions.simptomes.value.indexOf(target.value) > -1) {
        this.questions.simptomes.value.splice(this.questions.simptomes.value.indexOf(target.value), 1);
      }
    }
  }
}
