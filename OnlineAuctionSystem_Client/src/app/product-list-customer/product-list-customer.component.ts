import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-product-list-customer',
  templateUrl: './product-list-customer.component.html',
  styleUrls: ['./product-list-customer.component.css']
})
export class ProductListCustomerComponent implements OnInit {
  id!: number;

  seller:Seller=new Seller();
  customer:Customer=new Customer();
  customers!:Customer[];
   sellers!:Seller[];
  constructor(private sellerService:SellerService,
    private router:Router) { }

  ngOnInit(): void {
    this.getSeller();

  }
  private getSeller(){
    this.sellerService.getSellerList().subscribe(data=>{
      this.sellers=data;
    })
}

gotoProductList(){
  this.router.navigate(['/productlist']);

}
}
