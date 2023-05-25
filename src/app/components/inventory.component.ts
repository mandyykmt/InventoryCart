import { Component, Output } from '@angular/core';
import { FRUITS } from '../constants';
import { CartAction } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  @Output()
  onClick = new Subject<CartAction>()

  fruits = FRUITS

  inc(i : number) {
    const action : CartAction = {
      item : this.fruits[i],
      quantity : 1
    }
    this.onClick.next(action)
    console.info(action)
  }

  dec(i : number) {
    const action : CartAction = {
      item : this.fruits[i],
      quantity : -1
    }
    this.onClick.next(action)
    console.info(action)
  }

}
