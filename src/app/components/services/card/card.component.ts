import { Component, Input, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screenSize/screen-size.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  isSmallScreen$ = this.ScreenSizeService.isSmallScreen$;

  constructor(private ScreenSizeService: ScreenSizeService) {

  }
  @Input() serviceInfo!: { nome: string, img: string, descricao: { paragrafo1: string, paragrafo2: string }, modal: any };

  showModal = false

  handleModal(e: Event) {
    e.preventDefault()
    e.stopPropagation()

    this.showModal = !this.showModal

  }
}
