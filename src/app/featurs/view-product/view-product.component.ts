import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ProductInterface,
  ProductResponseInterface,
} from 'src/app/core/models/productInterface';
import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  productdeteils: ProductInterface[] = [];
  _id: any;

  constructor(private productsrvc: ProductService,private Actvroute: ActivatedRoute) {}

  ngOnInit(): void {
    // let routeparams = this.Actvroute.snapshot.paramMap.get('id');
    // this._id = parseInt(routeparams);
    // console.log(routeparams);

    this.productsrvc.getProductsById('id').subscribe((res: ProductResponseInterface) => {
        this.productdeteils = res.productData.filter((x) => x._id == this._id) ;
        console.log(res.productData);
      });
  }

  toCart() {}
}
