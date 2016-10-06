import {Pipe, PipeTransform} from '@angular/core';
//import {HomeComponent} from 'home.component';

@Pipe({
  name: 'search'
})

export class Search implements PipeTransform{
  transform(value: any[], searchTerm: string) {
    return value.filter(item => item.name.indexOf(searchTerm) !== -1);
    //return value;
  }
}
