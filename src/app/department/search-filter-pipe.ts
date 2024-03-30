import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) return [];

    if (!searchText) return items;

    return this.searchItems(items, searchText.toLowerCase());
  }

  // private searchItems(items: any[], searchText: string): any[] {

  //  let results: any[] = [];
  //  console.log(items);
  //     items.forEach(it => {
  //       console.log(it);
  //       if (it.department_name.toLowerCase().includes(searchText)) {
  //           results.push(it);

  //       }
  //     });
  //     return results;
  // }
  private searchItems(items: any[], searchText: string): any[] {
    let results: any[] = [];
    items.forEach(it => {
      for (let key in it) {
        if (typeof it[key] === 'string' && it[key].toLowerCase().includes(searchText.toLowerCase())) {
          results.push(it);
          break; // Exit the loop if one property matches
        }
      }
    });
    return results;
  }
}
