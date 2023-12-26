import { Component, OnInit } from '@angular/core';
import { productList } from './products.mock';
import { IProducto } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public producList : IProducto[] = [];
  //public productList : any;

  constructor(private apiservice : ApiService){
  }
  ngOnInit(): void {
    this.apiservice.getProducts().subscribe((data : IProducto[]) =>{
      console.log(data)
      this.producList = data;
    })
  }
}
