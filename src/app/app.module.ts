import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TipodniInputComponent } from './tipodni-input/tipodni-input.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    ProductDetailsComponent,
    TipodniInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//formularios de tipo plantilla
    ReactiveFormsModule,//formularios reactivos
    HttpClientModule//httpclient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
