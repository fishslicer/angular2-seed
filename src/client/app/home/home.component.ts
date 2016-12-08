import { Component, OnInit } from '@angular/core';
import { NameListService, InventoryListService } from '../shared/index';
import { Search } from './search.pipe';
import {CartService} from '../shared/cart/cart.service';
import {HistoryService} from '../guesser/history.service';
//import {CarouselComponent} from 'carousel/carousel.component';
//import 'owlcarousel/owl-carousel/owl.carousel';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  pipes: [Search]

})

export class HomeComponent implements OnInit {

  //newName: string = '';
  searchTerm: string = '';
  errorMessage: string;
  names: any[] = [];
  inventory: any[] = [];
  view: boolean = false;
  list: boolean = false;
  highest1: number;
  highest2: number;
  highest3: number;
  highest1Name: string;
  highest2Name: string;
  highest3Name: string;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService,
              public inventoryListService: InventoryListService,
              private cartService:CartService,
              public historyService: HistoryService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    //this.getItems();
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
    this.historyService.itemSelectIncrement(item);
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
  toggleView(){
    this.view = !this.view;
  }
  toggleList(){
    this.list = !this.list;
  }
  getRecc(){
    var history = this.historyService.getHistory();

    var historyArray: {
      value: number,
      name: string
    }[] = [];
    var victor = 0;

    /*if(history.electronics > history.books &&
      history.electronics > history.drugs && history.electronics > history.office_supplies
      && history.electronics > history.tools && history.electronics > history.movies && history.electronics > history.games)
      victor = 'electronics';
    else if(history.books > history.electronics)*/

    historyArray[0] = {value: history.electronics, name: 'electronics'};
    historyArray[1] = {value: history.books, name: 'books'};
    historyArray[2] = {value: history.drugs, name: 'drugs'};
    historyArray[3] = {value: history.office_supplies, name:'office supplies'};
    historyArray[4] = {value: history.tools, name: 'tools'};
    historyArray[5] = {value: history.movies, name: 'movies'};
    historyArray[6] = {value: history.games, name: 'games'};
    //historyArray.push({history.electronics, 'electronics'});
    var sortedHistoryArray = historyArray.sort(
      function(a,b){
        if (a.value < b.value)
          return 1;
        if (a.value > b.value)
          return -1;
        return 0;
    }
    );
    return sortedHistoryArray;
    /*for(var i = 0; i < historyArray.length; i++){
      if(historyArray[i] >= historyArray[this.highest1])
        this.highest1 = i;
      /!*if(historyArray[i]>historyArray[this.highest1])
      {
        this.highest3=this.highest2;
        this.highest2=this.highest1;
        this.highest1=i;
      }
      else if (historyArray[i]>historyArray[this.highest2])
      {
        this.highest3=this.highest2;
        this.highest2=i;
      }
      else if(historyArray[i]>historyArray[this.highest3])
      {
        this.highest3=i;
      }*!/
    }
    for(var i = 0; i < historyArray.length; i++){
      if(historyArray[i] >= historyArray[this.highest2]
        && historyArray[i] < historyArray[this.highest1] )

    }*/
   /* console.log(this.highest1 + '' + this.highest2 + '' + this.highest3);
    switch(this.highest1){
      case 0:
        this.highest1Name =  'electronics';
        break;
      case 1:
        this.highest1Name =  'books';
        break;
      case 2:
        this.highest1Name =  'drugs';
        break;
      case 3:
        this.highest1Name =  'office supplies';
        break;
      case 4:
        this.highest1Name =  'tools';
        break;
      case 5:
        this.highest1Name =  'movies';
        break;
      case 6:
        this.highest1Name =  'games';
        break;
      default:
        this.highest1Name =  'electronics';
    }
    switch(this.highest2){
      case 0:
        this.highest2Name =  'electronics';
        break;
      case 1:
        this.highest2Name =  'books';
        break;
      case 2:
        this.highest2Name =  'drugs';
        break;
      case 3:
        this.highest2Name =  'office supplies';
        break;
      case 4:
        this.highest2Name =  'tools';
        break;
      case 5:
        this.highest2Name =  'movies';
        break;
      case 6:
        this.highest2Name =  'games';
        break;
      default:
        this.highest2Name =  'electronics';
    }
    switch(this.highest3){
      case 0:
        this.highest3Name =  'electronics';
        break;
      case 1:
        this.highest3Name =  'books';
        break;
      case 2:
        this.highest3Name =  'drugs';
        break;
      case 3:
        this.highest3Name =  'office supplies';
        break;
      case 4:
        this.highest3Name =  'tools';
        break;
      case 5:
        this.highest3Name =  'movies';
        break;
      case 6:
        this.highest3Name =  'games';
        break;
      default:
        this.highest3Name =  'electronics';
    }*/
  }

  resetHistory(){
    this.historyService.resetHistory();
  }

}
