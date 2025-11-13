import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ListaComponent } from './lista-component/lista-component';
import { ContactoComponent } from './contacto-component/contacto-component';
import { ActualizarComponent } from './actualizar-component/actualizar-component';
import { EditarComponent } from './editar-component/editar-component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'agregar', component: ContactoComponent },
  { path: 'actualizar/:indice', component: ActualizarComponent },
  { path: 'editar/:indice', component: EditarComponent },
];
