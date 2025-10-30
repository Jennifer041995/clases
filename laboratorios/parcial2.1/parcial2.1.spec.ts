import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parcial21 } from './parcial2.1';

describe('Parcial21', () => {
  let component: Parcial21;
  let fixture: ComponentFixture<Parcial21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parcial21]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parcial21);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
