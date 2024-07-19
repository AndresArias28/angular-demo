import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit{
  
  product: Product | undefined;

  //construir las rutas
  constructor(private route: ActivatedRoute  ) { }

  ngOnInit() {
    // Ontener el id de la ruta actual
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    //Encontrar el producto que corresponde al id suminstrado en la ruta
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
