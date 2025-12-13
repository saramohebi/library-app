import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
     private users: MemberItem[] = [{ id: 1, name: 'سارا ', family: 'شمسی محب', bookname: 'طراحی وب', price: 12000 ,date:'آبان ماه ',status:'پرداخت شده'},
      { id: 1, name: 'کیمیا', family: 'عبدی', bookname: 'ریاضیات', price: 5000 ,date:'خرداد',status:'پرداخت نشده'},
      { id: 1, name: 'حانیه', family: 'ابراهیمی', bookname: 'ساختمان گسسته', price: 7500 ,date:'مرداد',status:'پرداخت نشده'},
      { id: 1, name: 'رها', family: 'یوسفی', bookname: 'پایگاه داده ', price: 8000 ,date:'دی',status:'پرداخت شده'},

     ];
     add(users:MemberItem) { //Create
      this.users.push(users);
  }
     list(){ //Read
      return [...this.users];
     }
     update(){ //Update
  
     }
     remove(){ //Delete
  
     }
}
