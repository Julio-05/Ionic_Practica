import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  constructor() { }

  numero1: number = 0;

  tabla: number[] = [];

  // Función para calcular y actualizar la tabla cuando cambia el número
  calcularTabla() {
    this.tabla = []; 
    for (let i = 1; i <= 13; i++) {
      this.tabla.push(this.numero1 * i); 
    }
  }

  ngOnInit() {
  }

}
