import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productsArr: Product[] = [];

  product: Product = {
    Pid: null,
    Pname: "",
    Price: null,
    Stock: null
  };

  @Output() newProduct: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addNewProduct(){
    this.productsArr.push(this.product);
    localStorage.setItem('products', JSON.stringify(this.productsArr));
    this.product = {
      Pid: null,
      Pname: "",
      Price: null,
      Stock: null
    };
  }
}
