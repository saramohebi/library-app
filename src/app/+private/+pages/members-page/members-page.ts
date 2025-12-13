import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members-service';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage implements OnInit {
  ngOnInit(): void {
    this.refreshusers();
  }
  membersService=inject(MembersService);
  users: MemberItem[] = [];
  action:string='list';
  item:MemberItem={
    id:0,
    name:'',
    family:'',
    bookname:'',
    price:0,
    date:'',
    status:''
  };
    refreshusers(){
    this.users=this.membersService.list();
  }
  add() {
    this.item={
    id:0,
    name:'',
    family:'',
    bookname:'',
    price:0,
    date:'',
    status:''
    }
    this.action='add';
}
save() {
    this.membersService.add(this.item);
    this.refreshusers();
    this.action='list';
}
cancel() {
    this.action='list';
}

}

export interface MemberItem {
  id: number;
  name: string;
  family: string;
  bookname: string;
  price: number;
  date:string;
  status:string;
}