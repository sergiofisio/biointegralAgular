import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowusComponent } from './nowus.component';

describe('NowusComponent', () => {
  let component: NowusComponent;
  let fixture: ComponentFixture<NowusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowusComponent]
    });
    fixture = TestBed.createComponent(NowusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
