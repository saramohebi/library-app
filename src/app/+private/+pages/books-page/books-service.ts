import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
   private data: BookItem[] = [{ id: 1, title: 'طراحی وب', writer: 'رضا بهرامی', publisher: 'محمود حسینی', price: 12000 }];
   add(book:BookItem) { //Create
    this.data.push(book);
}
   list(){ //Read
    return [...this.data];
   }
   update(){ //Update

   }
   remove(){ //Delete

   }
}
