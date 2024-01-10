import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectorFormPatientComponent } from './input-selector-form-patient.component';

describe('InputSelectorFormPatientComponent', () => {
  let component: InputSelectorFormPatientComponent;
  let fixture: ComponentFixture<InputSelectorFormPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputSelectorFormPatientComponent]
    });
    fixture = TestBed.createComponent(InputSelectorFormPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
