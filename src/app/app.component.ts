import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menu: any[] = [
    {
      icon: 'fa-newspaper',
      name: 'Publicaciones',
      redirecTo: '/publicaciones'
    },
    {
      icon: 'fa-calendar-alt',
      name: 'Calendario de Citas',
      redirecTo: '/'
    },
    {
      icon: 'fa-file-invoice-dollar',
      name: 'Facturación',
      redirecTo: '/'
    },
    {
      icon: 'fa-headset',
      name: 'Soporte Técnico',
      redirecTo: '/'
    },
    {
      icon: 'fa-chart-line',
      name: 'Mis Estadísticas',
      redirecTo: '/'
    },
    {
      icon: 'fa-tachometer-alt',
      name: 'Escritorio',
      redirecTo: '/'
    },
    {
      icon: 'fa-comments',
      name: 'Chat de Usuarios',
      redirecTo: '/'
    }
  ];
  title = 'smas';
  mode = 'over';

  ngOnInit() {
    if ( window.screen.width > 800) {
      this.mode = 'side';
    }
  }

}
