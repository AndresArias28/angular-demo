import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

    @Input() producto: Product | undefined;
    @Output() notify = new EventEmitter();//Permite emitir el evento h acia el padre cuanto el valor de notify cambia
  


}
