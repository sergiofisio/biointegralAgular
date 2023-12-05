import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  activeSection: string = '';

  setActiveSection(section: string) {
    this.activeSection = section;
    console.log(this.activeSection);
  }
}
