import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
   private data: BookItem[] = [{ id: 1, title: 'طراحی وب', writer: 'رضا بهرامی', publisher: 'محمود حسینی', price: 12000 },
      { id: 2, title: 'پایگاه داده  ', writer: 'مریم نظری', publisher: 'محمود حسینی', price: 8000 },
      { id: 3, title: 'ریاضیات ', writer: 'علی مهربانی', publisher: 'مهدی الماسی', price: 5000 },
      { id: 4, title: 'مبانی امنیت شبکه ', writer: 'احمدرضا ناجی', publisher: 'پرستو یحیایی', price: 10000 },
      { id: 5, title: 'ساختمان گسسته', writer: 'آرزو فرجی', publisher: 'زیبا مقدسی', price: 7500 }
   ];
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
