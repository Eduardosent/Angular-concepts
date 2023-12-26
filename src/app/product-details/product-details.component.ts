import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, productList } from '../products/products.mock';
import { IProducto } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  producto ?: IProducto;
  productList : IProducto[] = []
  loading : boolean = true;
  color : string = "";
  constructor(
    private route:ActivatedRoute,
    private apiService : ApiService
    ){

  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params)=>{
        console.log(params["productId"])
        this.apiService.getProductById(params["productId"]).subscribe({
          next: (data : IProducto) =>{
            console.log(data)
            this.producto = data;
            this.color = this.producto?.price > 100 ? "red" : '';
            this.loading = false;
          },
          error: (error : any) =>{
            console.log(error)
            this.loading = false;
          }
        })
      },
      error:(error : any)=>{
        console.log(error);
      }
    }
    )
  }
}
