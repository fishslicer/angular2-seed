import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  //newName: string = '';
  searchTerm: string = '';
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getItems();
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
