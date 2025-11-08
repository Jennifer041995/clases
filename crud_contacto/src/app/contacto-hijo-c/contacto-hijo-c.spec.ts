import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoHijoC } from './contacto-hijo-c';

describe('ContactoHijoC', () => {
  let component: ContactoHijoC;
  let fixture: ComponentFixture<ContactoHijoC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoHijoC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoHijoC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
