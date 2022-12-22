import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateSellerComponent } from './create-seller/create-seller.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { HomeComponent } from './home/home.component';
import { ProductListCustomerComponent } from './product-list-customer/product-list-customer.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { SellerViewComponent } from './seller-view/seller-view.component';
import { UdateProductComponent } from './udate-product/udate-product.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewOneCustomerComponent } from './view-one-customer/view-one-customer.component';
import { ViewOneProductComponent } from './view-one-product/view-one-product.component';
import { ViewOneSellerComponent } from './view-one-seller/view-one-seller.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'sellers',
    component:SellerViewComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'createseller',
    component:CreateSellerComponent
  },
  {
    path:'updateproduct/:id',
    component:UdateProductComponent
  },
  {
    path:'productlist',
    component:ProductViewComponent
  },
  {
    path:'viewoneseller/:id',
    component:ViewOneSellerComponent
  },
  {
    path:'viewoneproduct/:id',
    component:ViewOneProductComponent
  },
  {
    path:'createcustomer',
    component:CreateCustomerComponent
  },
  {
    path:'customers',
    component:CustomerViewComponent
  },
  {
    path:'updatecustomer/:id',
    component:UpdateCustomerComponent
  },
  {
    path:'viewonecustomer/:id',
    component:ViewOneCustomerComponent
  },
  {
    path:'viewonecustomerproductlist/:id',
    component:ProductListCustomerComponent
  },
  {
    path:'aboutus',
    component:AboutUsComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
