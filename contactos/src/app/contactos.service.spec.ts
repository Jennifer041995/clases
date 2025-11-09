import { TestBed } from "@angular/core/testing";
import { ServiceContactos } from "./contactos.service";


describe('ServiceContactos', () => {
  let service: ServiceContactos;    
    beforeEach(() => {  
        TestBed.configureTestingModule({});
        service = TestBed.inject(ServiceContactos);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    }); 
});