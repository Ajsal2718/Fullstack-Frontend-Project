import { Component,OnInit } from '@angular/core';
import { ProductInterface, ProductResponseInterface } from 'src/app/core/models/productInterface';
import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-watch-product',
  templateUrl: './watch-product.component.html',
  styleUrls: ['./watch-product.component.css']
})
export class WatchProductComponent implements OnInit{
  allProducts : ProductInterface[] = []
  constructor(private productsrvc:ProductService ) { } 

  ngOnInit(): void {
    this.productsrvc.getAllProduct().subscribe((res:ProductResponseInterface) => {
      this.allProducts = res.productData.filter((x) => {return x.category === "Watch"})
    }, (err) => {
      console.log(err);
    })
  }

}
