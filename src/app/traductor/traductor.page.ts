import { Component } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage {

  numero1: number = 0;
  resultado: string = "-";

  traducir() {
    if (this.numero1 >= 1 && this.numero1 <= 1000) {
      if (this.numero1 === 500) {
        this.resultado = 'quinientos';
      } else {
        this.resultado = this.convertirNumeroALetras(this.numero1);
      }
    } else {
      this.resultado = "El número debe estar entre 1 y 1000";
    }
  }
  
  convertirNumeroALetras(numero: number): string {
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales = ['', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  
    let resultado = '';
  
    if (numero === 1000) {
      resultado = 'mil';
    } else {
      const centenasDigit = Math.floor(numero / 100);
      const decenasDigit = Math.floor((numero % 100) / 10);
      const unidadesDigit = numero % 10;
  
      if (centenasDigit === 1) {
        if (numero === 100) {
          resultado += 'cien';
        } else {
          resultado += 'ciento ';
        }
      } else if (centenasDigit > 0) {
        resultado += unidades[centenasDigit] + 'cientos ';
      }
  
      if (numero === 500) {
        resultado += 'quinientos';
      } else if (numero >= 100 && decenasDigit === 5) {
        if (numero >= 501 && numero <= 599) {
          resultado += 'quinientos';
        } else {
          resultado += 'quinientos ';
          if (unidadesDigit > 0) {
            resultado += ' ';
          }
        }
      } else if (decenasDigit === 5 && unidadesDigit === 0) {
        resultado += 'quinientos';
      } else {
        resultado += decenas[decenasDigit];
        if (unidadesDigit > 0) {
          resultado += unidades[unidadesDigit];
        } else {
          resultado += unidades[unidadesDigit];
        }
      }
    }
  
    return resultado.replace('cincocientos', 'quinientos');
  }
  
}  