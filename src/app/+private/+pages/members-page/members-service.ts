import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
     private users: MemberItem[] = [{ id: 1, name: 'سارا ', family: 'شمسی محب', bookname: 'طراحی وب', price: 12000 ,date:'آبان ماه ',status:'پرداخت شده'},
      { id: 2, name: 'کیمیا', family: 'عبدی', bookname: 'ریاضیات', price: 5000 ,date:'خرداد',status:'پرداخت نشده'},
      { id: 3, name: 'حانیه', family: 'ابراهیمی', bookname: 'ساختمان گسسته', price: 7500 ,date:'مرداد',status:'پرداخت نشده'},
      { id: 4, name: 'رها', family: 'یوسفی', bookname: 'پایگاه داده ', price: 8000 ,date:'دی',status:'پرداخت شده'},

     ];
     add(users:MemberItem) { //Create
      this.users.push(users);
  }
     list(){ //Read
      return [...this.users];
     }
   update(users:MemberItem){ //Update
    const  index=this.users.findIndex(b=>b.id==users.id)
    if(index!=-1){
      this.users[index].id=users.id;
      this.users[index].name=users.name;
      this.users[index].family=users.family;
      this.users[index].bookname=users.bookname;
      this.users[index].price=users.price;
      this.users[index].date=users.date;
      this.users[index].status=users.status;
    }
   }
     remove(users:MemberItem){ //Delete
      this.users=this.users.filter(m=>m.id!=users.id);
     }
}
