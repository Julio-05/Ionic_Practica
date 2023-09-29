import { Component } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage {
  numero1: number;
  numero2: number;
  resultado: number;

  constructor() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }

  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }
}
