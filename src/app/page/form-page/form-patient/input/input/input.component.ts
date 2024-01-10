import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-form-patient',
  templateUrl: './input.component.html'
})
export class InputComponentFormPatient {
  [key: string]: any
  @Input() question!: any;
  @Input() type?: string;
  @Input() disabled: boolean = false;
  @Output() modelChange = new EventEmitter<any>();
  @Output() blur: EventEmitter<void> = new EventEmitter<void>();
  
  onFocus() {
    this.question.error = false
  }

  onBlur() {
    this.blur.emit();
  }

  onModelChange(value: any, local: any) {
    this[`${local}`].value = value
    this.modelChange.emit(this[`${local}`].value)
  }
}
