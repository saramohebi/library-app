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
    name:'',
    family:'',
    bookname:'',
    date:'',
    status:''
  };
    refreshusers(){
    this.users=this.membersService.list();
  }
  add() {
    this.item={
    name:'',
    family:'',
    bookname:'',
    date:'',
    status:''
    }
    this.action='add';
}
  edit(users:MemberItem) {
    this.item={...users};
    this.action='edit';
}
save() {
    if(this.action=='add'){
      this.membersService.add(this.item);
    }
    else if(this.action=='edit'){
      this.membersService.update(this.item);
    }
    else if(this.action=='remove'){
      this.membersService.remove(this.item);
    }    
    this.refreshusers();
    this.action='list';
}
cancel() {
    this.action='list';
}
remove(users:MemberItem) {
    this.item={...users};
    this.action='remove';
}

}

export interface MemberItem {
  id?: number;
  name: string;
  family: string;
  bookname: string;
  price?: number;
  date:string;
  status:string;
}