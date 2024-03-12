import { Component, Input } from '@angular/core';
import { MacProductInterface } from 'src/app/core/models/productInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() products : MacProductInterface

  removeProducts(){
    
  }
}
