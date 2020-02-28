import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu: any[] = [
    {
      icon: 'fa-american-football',
      name: 'Publicaciones',
      redirecTo: '/publicaciones'
    },
    {
      icon: 'fa-calendar',
      name: 'Calendario de Citas',
      redirecTo: '/alert'
    },
    {
      icon: 'fa-file-invoice-dollar',
      name: 'Facturación',
      redirecTo: '/card'
    },
    {
      icon: 'fa-headset',
      name: 'Soporte Técnico',
      redirecTo: '/avatar'
    },
    {
      icon: 'fa-chart-line',
      name: 'Mis Estadísticas',
      redirecTo: '/card'
    },
    {
      icon: 'fa-card',
      name: 'Escritorio',
      redirecTo: '/card'
    },
    {
      icon: 'fa-comments',
      name: 'Chat de Usuarios',
      redirecTo: '/card'
    }
  ];
  title = 'smas';
}
