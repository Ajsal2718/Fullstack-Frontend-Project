import { Component,OnInit } from '@angular/core';
import { ProductInterface, ProductResponseInterface } from 'src/app/core/models/productInterface';
import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-iphone-product',
  templateUrl: './iphone-product.component.html',
  styleUrls: ['./iphone-product.component.css']
})
export class IphoneProductComponent implements OnInit{
  allProducts : ProductInterface[] = []
  constructor(private productsrvc: ProductService){}

  ngOnInit(): void {
    this.productsrvc.getAllProduct().subscribe((res:ProductResponseInterface) => {
      this.allProducts = res.productData.filter((x) => {
        return x.category === "iPhone"
      })
    })
  }

}
