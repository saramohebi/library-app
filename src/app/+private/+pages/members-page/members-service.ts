import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
     private users: MemberItem[] = [{ id: 1, name: 'سارا ', family: 'شمسی محب', bookname: 'طراحی وب', price: 12000 ,date:'azar',status:'پرداخت شده'}];
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
