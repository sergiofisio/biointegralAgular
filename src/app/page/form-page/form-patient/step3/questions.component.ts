import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent {
  @Input() label!: string;
  @Input() options?: any;
  @Input() error?: boolean;
  @Input() model!: string;
  @Output() modelChange = new EventEmitter<string>();

  OnInit() {
    console.log(this.label, this.options, this.model);
  }


  onModelChage = (value: string) => {
    this.model = value
    this.modelChange.emit(this.model);
  }
}
