import { Component,OnInit } from '@angular/core';
import { ProductInterface, ProductResponseInterface } from 'src/app/core/models/productInterface';
import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-airpod-product',
  templateUrl: './airpod-product.component.html',
  styleUrls: ['./airpod-product.component.css']
})
export class AirpodProductComponent implements OnInit{
  allProducts : ProductInterface[]  = []
  constructor(private productsrvc:ProductService){}

  ngOnInit(): void {
    this.productsrvc.getAllProduct().subscribe((res:ProductResponseInterface) => {
      this.allProducts = res.productData.filter((x) => {return   x.category === "AirPods"})
    }, (err) => {
      console.log(err);
    })
  }

}
