import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdateProductComponent } from './udate-product.component';

describe('UdateProductComponent', () => {
  let component: UdateProductComponent;
  let fixture: ComponentFixture<UdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
