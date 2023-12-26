import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase='https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  public getProducts(sort?: string): Observable<IProducto[]>{
    const order = sort ? sort : '' ;
    return this.http.get<IProducto[]>(`${this.urlBase}`)
  }
  public getProductById(id : number): Observable<IProducto>{
    return this.http.get<IProducto>(`${this.urlBase}/${id}`)
  }
  public getCategory(){
    return this.http.get(`${this.urlBase}/categories`)
  }
  public postProduct(product : any){
    return this.http.post(this.urlBase,product)
  }
  public putProduct(id:number, product: any){
    return this.http.put(`${this.urlBase}/${id}`,product)
  }
  public deleteProduct(id:number) : Observable<IProducto>{
    return this.http.delete<IProducto>(`${this.urlBase}/${id}`)
  }
}
