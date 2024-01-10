import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-selector-form-patient',
  templateUrl: './input-selector-form-patient.component.html'
})
export class InputSelectorFormPatientComponent {
  [key: string]: any
  @Input() question!: any;
  @Output() modelChange = new EventEmitter<any>();

  onFocus() {
    this.question.error = false
  }

  onModelChange(value: any, local: any) {
    this[`${local}`].value = value
    this.modelChange.emit(this[`${local}`].value)
  }
}
