import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicacionesComponent } from './view/publicaciones/publicaciones.component';
import { PublicacionComponent } from './view/publicacion/publicacion.component';
import { HomeComponent } from './view/home/home.component';
import { CambiarAtributosComponent } from './view/publicacion/cambiar-atributos/cambiar-atributos.component';
import { GestionarComponent } from './view/publicacion/gestionar/gestionar.component';
import { PublicitariaComponent } from './view/publicacion/publicitaria/publicitaria.component';
import { PerfilComponent } from './view/perfil/perfil.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'publicaciones',
    component: PublicacionesComponent
  },
  {
    path: 'publicacion',
    component: PublicacionComponent
  },
  {
    path: 'publicacion/atributos',
    component: CambiarAtributosComponent
  },
  {
    path: 'publicacion/gestionar',
    component: GestionarComponent
  },
  {
    path: 'publicacion/publicitaria',
    component: PublicitariaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
