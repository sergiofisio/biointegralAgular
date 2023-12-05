import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html'
})
export class HamburgerMenuComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  menus = [{
    text: 'INÍCIO',
    ref: '#'
  },
  {
    text: 'QUEM SOMOS',
    ref: '#quem'
  },
  {
    text: 'TÉCNICAS',
    ref: '#tecnica'
  },
  {
    text: 'ONDE ESTAMOS',
    ref: '#onde'
  },
  {
    text: 'CONTATO',
    ref: '#contato'
  }]
}
