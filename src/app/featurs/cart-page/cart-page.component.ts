import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/core/models/productInterface';
import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  // pvalue: number = 1;
  // productdeteils: ProductInterface[] = [];
  // tocartProduct: ProductInterface[] = [];
  // cartProducts: ProductInterface[] = [];
  // id: string;
  // cartPrice = 0;
  // totalQuantity = 0;
  constructor(private prdctSrvc: ProductService) {}

  ngOnInit(): void {
  //   const cartProduct = this.productdeteils.filter((x) => x._id === this.id);
  //   const productInCart = this.tocartProduct.find((x) => x._id === this.id);
  //   if (!productInCart) {
  //     this.tocartProduct.push(cartProduct[0]);
  //     this.cartProducts = this.tocartProduct;
  //     alert('Added To Cart');
  //   } else {
  //     alert('Already in the Cart');
  //   }
    }
  // updatePrice() {}
  // deleteProduct(cartpro) {}
}
