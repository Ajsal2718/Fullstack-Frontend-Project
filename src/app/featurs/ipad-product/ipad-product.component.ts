import { Component, OnInit } from '@angular/core';
import {
  ProductInterface,
  ProductResponseInterface,
} from 'src/app/core/models/productInterface';
import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-ipad-product',
  templateUrl: './ipad-product.component.html',
  styleUrls: ['./ipad-product.component.css'],
})
export class IpadProductComponent implements OnInit {
  allProducts: ProductInterface[] = [];
  constructor(private productsrvc: ProductService) {}
  ngOnInit(): void {
    this.productsrvc
      .getAllProduct()
      .subscribe((res: ProductResponseInterface) => {
        this.allProducts = res.productData.filter((x) => {
          return  x.category === 'iPad';
        })
      });
  }
}
