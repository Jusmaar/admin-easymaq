import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSelectModule, MdInputModule, MdCheckboxModule, MdRadioModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

import { APP_ROUTING } from './app.routes';

import { MapaService } from './services/mapa.service';
import { UtilsService } from './services/utils.service';
import { HttpClient } from './services/http-client.service';
import { AdminService } from './services/admin.service';
import { LoginGuard } from './services/login.guard.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { EstadisticaComponent } from './components/estadistica/estadistica.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { PublicarNuevoComponent } from './components/publicar/publicar-nuevo/publicar-nuevo.component';
import { PublicarEditarComponent } from './components/publicar/publicar-editar/publicar-editar.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ModalComponent } from './components/modal/modal.component';


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
    PublicarEditarComponent,
    NgDropFilesDirective,
    MapaComponent,
    ModalComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule,
    ChartsModule,
    MdSelectModule,
    MdCheckboxModule,
    MdRadioModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgPba9ENKjx2AD7IOG2SIFN3x5WYAKqo4',
      libraries: ["places"]
    }),
    APP_ROUTING
  ],
  providers: [
    MapaService,
    UtilsService,
    AdminService,
    LoginGuard,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
