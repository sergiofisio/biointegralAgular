import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  isSmallScreen$: Observable<boolean>;
  constructor(breakpointObserver: BreakpointObserver) {
    this.isSmallScreen$ = breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map(result => result.matches)
      );
  }
}
