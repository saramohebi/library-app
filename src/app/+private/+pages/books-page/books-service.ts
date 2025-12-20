import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
   clear() {
     throw new Error('Method not implemented.');
   }
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
   update(book:BookItem){ //Update
    const  index=this.data.findIndex(b=>b.id==book.id)
    if(index!=-1){
      this.data[index].title=book.title;
      this.data[index].writer=book.writer;
      this.data[index].publisher=book.publisher;
      this.data[index].price=book.price;
    }
   }
   remove(book:BookItem){ //Delete
      this.data=this.data.filter(m=>m.id!=book.id);
   }
}
