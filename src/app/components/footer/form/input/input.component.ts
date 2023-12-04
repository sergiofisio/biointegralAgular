import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input() type!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() model!: string;
  @Input() mask?: string;
  @Output() modelChange = new EventEmitter<string>();

  onModelChange(value: string) {
    this.model = value
    this.modelChange.emit(this.model)
  }
}
