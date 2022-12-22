import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from './seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private baseUrl="http://localhost:8090/sellers";
  constructor( private httpClient:HttpClient) { }

  getSellerList(): Observable<Seller[]>{
    return this.httpClient.get<Seller[]>(`${this.baseUrl}`)
  }

  createSeller(seller: Seller):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,seller);
  }

  getSellerById(id:number):Observable<Seller>{
    return this.httpClient.get<Seller>(`${this.baseUrl}/${id}`)
  }
  updateProduct(id:number,seller:Seller):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,seller);
  }
  deleteProduct(id:number,seller:Seller):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,seller);
  }
  deleteSeller(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  bidProduct(id:number,customerName: String):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,customerName);
  }
}
