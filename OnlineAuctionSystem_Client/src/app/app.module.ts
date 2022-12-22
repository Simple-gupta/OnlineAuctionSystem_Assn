import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerViewComponent } from './seller-view/seller-view.component';
import { HomeComponent } from './home/home.component';
import { CreateSellerComponent } from './create-seller/create-seller.component';
import { UdateProductComponent } from './udate-product/udate-product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ViewOneSellerComponent } from './view-one-seller/view-one-seller.component';
import { ViewOneProductComponent } from './view-one-product/view-one-product.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewOneCustomerComponent } from './view-one-customer/view-one-customer.component';
import { ProductListCustomerComponent } from './product-list-customer/product-list-customer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerViewComponent,
    HomeComponent,
    CreateSellerComponent,
    UdateProductComponent,
    ProductViewComponent,
    ViewOneSellerComponent,
    ViewOneProductComponent,
    CreateCustomerComponent,
    CustomerViewComponent,
    UpdateCustomerComponent,
    ViewOneCustomerComponent,
    ProductListCustomerComponent,
    AboutUsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
