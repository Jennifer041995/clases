import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroresPersonalizados } from './errores-personalizados';

describe('ErroresPersonalizados', () => {
  let component: ErroresPersonalizados;
  let fixture: ComponentFixture<ErroresPersonalizados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroresPersonalizados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroresPersonalizados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
