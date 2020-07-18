import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  productsList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  onNewProduct(product: Product){
    this.productsList.unshift(product);
    localStorage.setItem('products', JSON.stringify(this.productsList));
  }

  getProducts(){
    if(localStorage.getItem('products') === null){
      this.productsList = [];
    }
    else{
      this.productsList = JSON.parse(localStorage.getItem('products'));
    }
  }
}
