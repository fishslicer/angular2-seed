import { Component, OnInit } from '@angular/core';
import { NameListService, InventoryListService } from '../shared/index';
import { Search } from './search.pipe';
import {CartService} from '../shared/cart/cart.service';
//import 'owlcarousel/owl-carousel/owl.carousel';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']

})

export class HomeComponent implements OnInit {

  //newName: string = '';
  searchTerm: string = '';
  errorMessage: string;
  names: any[] = [];
  inventory: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService,
              public inventoryListService: InventoryListService,
              private cartService:CartService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getItems();
    this.getInventory();
  }

  /**
   * Handle the nameListService observable
   */
  getItems() {
    this.nameListService.get()
		     .subscribe(
		       names => this.names = names,
		       error =>  this.errorMessage = <any>error
		       );
  }

  getInventory() {
    this.inventoryListService.get()
      .subscribe(
        inventory => this.inventory = inventory,
        error =>  this.errorMessage = <any>error
      );

  }

  addToCart(item){
    this.cartService.addItem(item);
    console.log('item added to cart');
  }
  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.searchTerm);
    console.log(this.searchTerm);
    this.searchTerm = '';
    return false;
  }

}
