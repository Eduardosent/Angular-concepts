import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'Products', component: ProductsComponent},
  {path:'Products/:category/:productId', component: ProductDetailsComponent},
  {path:'Contact', component : ContactComponent},
  {path:'**', redirectTo:"",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
