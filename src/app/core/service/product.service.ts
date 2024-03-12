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
    return this.http.get(`http://localhost:1827/api/getproduct`,{withCredentials: true})
  }
  
}
