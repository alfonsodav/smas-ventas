import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs'; // eliminar
import { MatDialogModule } from '@angular/material/dialog';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MDBModalRef } from 'angular-bootstrap-md';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './view/sidebar/sidebar.component';
import { PublicacionesComponent } from './view/publicaciones/publicaciones.component';
import { HomeComponent } from './view/home/home.component';
import { PublicacionComponent } from './view/publicacion/publicacion.component';
import { CambiarAtributosComponent } from './view/publicacion/cambiar-atributos/cambiar-atributos.component';
import { GestionarComponent } from './view/publicacion/gestionar/gestionar.component';
import { PublicitariaComponent } from './view/publicacion/publicitaria/publicitaria.component';
import { PerfilComponent } from './view/perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PublicacionesComponent,
    HomeComponent,
    PublicacionComponent,
    CambiarAtributosComponent,
    GestionarComponent,
    PublicitariaComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatBadgeModule,
    MDBBootstrapModule.forRoot()
  ],
  entryComponents: [],
  providers: [MDBModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
