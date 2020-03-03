import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.component.html',
  styleUrls: ['../publicacion.component.css']
})
export class GestionarComponent implements OnInit {

  imagenes: any[] = [
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol'
    },
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol'
    },
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol'
    },
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol'
    },
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol'
    },
    {
      ruta: 'assets/images/sunsol-piscina-sm.jpg',
      altFile: 'hotel sunsol'
    },
  ];
  videos: any[] = [
    {
      ruta: 'assets/videos/1.Introducción.mp4',
      altFile: 'Gorillaz On Melancholy hill video oficial'
    },
    {
      ruta: 'assets/videos/1.Introducción.mp4',
      altFile: 'Gorillaz On Melancholy hill video oficial'
    },
    {
      ruta: 'assets/videos/1.Introducción.mp4',
      altFile: 'Gorillaz On Melancholy hill video oficial'
    }
  ];
  documentos: any[] = [
    {
      portada: 'assets/docs/docs-portada.png',
      ruta: 'assets/docs/Modulo_5_Sprint_2.pdf',
      altFile: 'sprint del modulo 5'
    },
    {
      portada: 'assets/docs/docs-portada.png',
      ruta: 'assets/docs/Modulo6-Sprint1PerfildeUsuario.pdf',
      altFile: 'modulo 6'
    },
    {
      portada: 'assets/docs/docs-portada.png',
      ruta: 'assets/docs/Modulo_5_Sprint_2.pdf',
      altFile: 'sprint del modulo 5'
    },
    {
      portada: 'assets/docs/docs-portada.png',
      ruta: 'assets/docs/Modulo6-Sprint1PerfildeUsuario.pdf',
      altFile: 'modulo 6 usuarios'
    }
  ];

  multimedia = 'imagen';
  mostrar(tipoArchivo: string) {
    this.multimedia = tipoArchivo;
    return this.multimedia;
 }

constructor( ) {
}

ngOnInit() {

  }

}
