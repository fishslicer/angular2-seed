import {Injectable} from '@angular/core';
import {Item} from '../../models/item.model';

@Injectable()
export class CartService{
  private cart:Item[]=[];
  addItem(item:Item){
    console.log('adding: ' + item.name);
    this.cart.push(item);
  }
  deleteItem(item:Item){
    //this.cart = this.cart.filter()
  }
  checkout(){
    console.log('cart wiped');
    this.cart = [];
  }
  getCart(){
    return this.cart;
  }
}
