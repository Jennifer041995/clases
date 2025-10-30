import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parcial22 } from './parcial2.2';

describe('Parcial22', () => {
  let component: Parcial22;
  let fixture: ComponentFixture<Parcial22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parcial22]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parcial22);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
