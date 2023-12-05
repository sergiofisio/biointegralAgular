import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showScrollTopBtn = false;
  title = 'biointegral';

  constructor() { }

  ngOnInit() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTopBtn = (document.documentElement.scrollTop || document.body.scrollTop) > 200;
  }

  scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
