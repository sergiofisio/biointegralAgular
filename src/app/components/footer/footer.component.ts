import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  socials = [
    {
      name: 'Facebook',
      icon: '../../../assets/site/logo_social/fb.svg',
      url: 'https://www.facebook.com/saudebiointegral/'
    },
    {
      name: 'Instagram',
      icon: '../../../assets/site/logo_social/instagram.svg',
      url: 'https://www.instagram.com/biointegralsaude/'
    }
  ]

  showModal = false

  handleModal(e: Event) {
    e.preventDefault()
    e.stopPropagation()

    this.showModal = !this.showModal

  }

}
