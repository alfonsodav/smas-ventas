import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {


  imagenes: any[] = [
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol',
      active: true
    },
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol'
    },
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol',
      active: false
    },
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol',
      active: false
    },
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol',
      active: false
    },
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol',
      active: false
    },
  ];

  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
