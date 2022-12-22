import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListCustomerComponent } from './product-list-customer.component';

describe('ProductListCustomerComponent', () => {
  let component: ProductListCustomerComponent;
  let fixture: ComponentFixture<ProductListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
