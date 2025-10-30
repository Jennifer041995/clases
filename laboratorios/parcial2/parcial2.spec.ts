import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parcial2 } from './parcial2';

describe('Parcial2', () => {
  let component: Parcial2;
  let fixture: ComponentFixture<Parcial2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parcial2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parcial2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
