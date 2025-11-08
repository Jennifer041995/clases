import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ActualizarComponent } from './actualizar-component/actualizar-component';
import { ContactoComponent } from './contacto-component/contacto-component';

export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'actualizar/:id', component: ActualizarComponent },
];
