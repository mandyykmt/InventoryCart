import { Component } from '@angular/core';
import { CartAction, CartItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cart : CartItem[] = []

  process(action : CartAction) {
    // e is the element of the cart array currently iterated 
    let i = this.cart.find(e => e.item === action.item)
    if (action.quantity !== 0) {
      if(!i && action.quantity === 1) {
        this.cart.push({...action} as CartItem)
      } else if(!!i) {
        i.quantity += action.quantity
        if (i.quantity <= 0 ) {
          let index = this.cart.indexOf(i)
          this.cart.splice(index, 1)
        }
      }
    } 
    console.info(this.cart)
  }
}
