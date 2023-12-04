import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() serviceInfo!: { nome: string, img: string, descricao: { paragrafo1: string, paragrafo2: string }, modal: any };

  showModal = false

  handleModal(e: Event) {
    e.preventDefault()
    e.stopPropagation()

    this.showModal = !this.showModal

  }
}
