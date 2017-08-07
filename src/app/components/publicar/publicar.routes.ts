import { Routes } from '@angular/router';
import {PublicarNuevoComponent} from './publicar-nuevo/publicar-nuevo.component';
import {PublicarEditarComponent} from './publicar-editar/publicar-editar.component';

export const PUBLICAR_ROUTES: Routes = [
	{path:'nuevo',component:PublicarNuevoComponent},
	{path:'editar',component:PublicarEditarComponent},
	{path:'**',pathMatch:'full',redirectTo:'nuevo'}
];


