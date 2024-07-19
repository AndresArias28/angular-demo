import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //crear una copia del array original
  //los corchetes implican que se crea un nuevo array que contiene los elementos de porducts
  products = [...products];//operador spread- Operador de  propagacion

  compartir() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }



}
