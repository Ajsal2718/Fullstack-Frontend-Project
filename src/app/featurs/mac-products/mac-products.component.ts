import {Component, NgModule, OnInit } from '@angular/core';
import {MacProductInterface,MacProductResponseInterface} from 'src/app/core/models/productInterface';
import { ProductService } from 'src/app/core/service/product.service';


@Component({
  selector: 'app-mac-products',
  templateUrl: './mac-products.component.html',
  styleUrls: ['./mac-products.component.css'],
})
export class MacProductsComponent implements OnInit {

  allProducts: MacProductInterface[] = [];

  constructor(private productSrvc: ProductService) {}

  ngOnInit(): void {
    this.productSrvc.getAllProduct().subscribe(
      (res: MacProductResponseInterface) => {
        this.allProducts = res.productData.filter((x)=>{return x.category === 'Mac' });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
