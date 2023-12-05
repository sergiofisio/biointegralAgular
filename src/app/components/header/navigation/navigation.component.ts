import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  @ViewChild('home') home!: ElementRef;
  @ViewChild('quem') quem!: ElementRef;
  @ViewChild('quem') tecnica!: ElementRef;
  @ViewChild('quem') onde!: ElementRef;
  @ViewChild('quem') contato!: ElementRef;

  constructor(public navigationService: NavigationService) { }

  setActiveSection(section: string) {
    this.navigationService.setActiveSection(section);
    this.scrollToSection(section);
  }

  scrollToSection(section: string) {
    switch (section) {
      case 'home':
        this.home.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'quem':
        this.quem.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'tecnica':
        this.tecnica.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'onde':
        this.onde.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contato':
        this.contato.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

}
