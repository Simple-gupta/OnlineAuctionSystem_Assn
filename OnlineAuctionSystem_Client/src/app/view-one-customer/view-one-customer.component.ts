import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-one-customer',
  templateUrl: './view-one-customer.component.html',
  styleUrls: ['./view-one-customer.component.css']
})
export class ViewOneCustomerComponent implements OnInit {

  id!:number;
  customer:Customer=new Customer()
  constructor(private customerService:CustomerService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{
      this.customer=data;
    },error=>console.log(error));
  }

  goBack(){
    this.router.navigate(['/customers'])

  }
}
