import { Component,Input } from '@angular/core';
import { MacProductInterface } from 'src/app/core/models/productInterface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
removeProducts(arg0: any) {
throw new Error('Method not implemented.');
}

@Input() products : MacProductInterface

}


