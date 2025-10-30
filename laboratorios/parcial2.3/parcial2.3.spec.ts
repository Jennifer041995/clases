import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parcial23 } from './parcial2.3';

describe('Parcial23', () => {
  let component: Parcial23;
  let fixture: ComponentFixture<Parcial23>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parcial23]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parcial23);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
