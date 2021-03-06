import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  //templateUrl: './product-list.component.html',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
  this.listProduct();
  
  }
  listProduct() {
    this.productService.getProductList().subscribe(data=>{this.products=data;})
  }



}
