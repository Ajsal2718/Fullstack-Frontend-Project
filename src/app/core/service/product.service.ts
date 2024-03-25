import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http:HttpClient = inject(HttpClient);

  constructor() { }

  getAllProduct():Observable<object> {
    return this.http.get(`http://localhost:1827/api/product`,{withCredentials: true})
  }
  getProductsById(id:string):Observable<object>{
    return  this.http.get(`http://localhost:1827/api/productId/${id}`,{withCredentials:true});
  }
  addtoCart(id:string):Observable<object>{
    return this.http.post(`http://localhost:1827/api/${id}/cart`,{withCredentials: true} );
  }
}
