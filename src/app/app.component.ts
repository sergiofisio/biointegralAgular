import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showScrollTopBtn = false;
  title = 'biointegral';

  constructor(private router: Router) { }

  ngOnInit() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.router.url.endsWith('formulario')) {
      return;
    }

    this.showScrollTopBtn = (document.documentElement.scrollTop || document.body.scrollTop) > 200;
  }

  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
