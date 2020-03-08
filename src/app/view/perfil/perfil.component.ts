import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  opciones = 'configurar';
  mostrar(opcion: string) {
    this.opciones = opcion;
    return this.opciones;
 }

  constructor() { }

  ngOnInit() {
  }

}
