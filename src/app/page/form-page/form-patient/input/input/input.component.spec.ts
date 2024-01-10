import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponentFormPatient } from './input.component';

describe('InputComponentFormPatient', () => {
  let component: InputComponentFormPatient;
  let fixture: ComponentFixture<InputComponentFormPatient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponentFormPatient]
    });
    fixture = TestBed.createComponent(InputComponentFormPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
