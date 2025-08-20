import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoFeo } from './empleado-feo';

describe('EmpleadoFeo', () => {
  let component: EmpleadoFeo;
  let fixture: ComponentFixture<EmpleadoFeo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoFeo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoFeo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
