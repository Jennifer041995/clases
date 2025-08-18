import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nieto } from './nieto';

describe('Nieto', () => {
  let component: Nieto;
  let fixture: ComponentFixture<Nieto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nieto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nieto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
