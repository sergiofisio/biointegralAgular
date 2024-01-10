import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html'
})
export class Step1Component {
  @Input() questions!: any;
  @Input() function?: (value: any) => any;

  calculateAge() {

    if (!this.questions.birth.value) {
      return;
    }
    const birth = new Date(this.questions.birth.value);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    this.questions.age.value = age;
  }

  emotionSelected(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      this.questions.emotion.value.push(target.value);
    } else {
      if (this.questions.emotion.value.indexOf(target.value) > -1) {
        this.questions.emotion.value.splice(this.questions.emotion.value.indexOf(target.value), 1);
      }
    }
  }
}
