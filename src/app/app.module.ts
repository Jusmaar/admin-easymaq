import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSelectModule} from '@angular/material';
import { MdInputModule } from '@angular/material';
import {MdCheckboxModule} from '@angular/material';
import {MdRadioModule} from '@angular/material';
import { ChartsModule } from 'ng2-charts';

import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { PublicarNuevoComponent } from './components/publicar/publicar-nuevo/publicar-nuevo.component';
import { PublicarEditarComponent } from './components/publicar/publicar-editar/publicar-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    PublicacionesComponent,
    EstadisticaComponent,
    PublicarComponent,
    PublicarNuevoComponent,
    PublicarEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    ChartsModule,
    MdSelectModule,
    MdCheckboxModule,
    MdRadioModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
