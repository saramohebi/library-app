import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members-service';
import { thing } from '../../../+shared/base-thing';
import { BaseCrudPage } from '../../../+shared/base-crud-page';
import { BaseService } from '../../../+shared/base-service';
import { BaseCrudComponent, Column } from "../../../+shared/base-crud-component/base-crud-component";

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCrudPage<MemberItem> implements OnInit {
   ngOnInit(): void {
      this.item={
      name:'',
      family:'',
      bookname:'',
      status:'',
      date:''
    }
   this.refreshData();
  }
  override dataService=inject(MembersService);
  override addPrepair(): void {
    this.item={
      name:'',
      family:'',
      bookname:'',
      status:'',
      date:''
    }
  }
  memberColumns:Column[]=[
    {field:'id',title:'شناسه'},
    {field:'name',title:'نام'},
    {field:'family',title:'نام خانوادگی'},
    {field:'bookname',title:'نام کتاب'},
    {field:'price',title:'قیمت'},
    {field:'date',title:'تاریخ'},
    {field:'status',title:'وضعیت'},
  ]
}

export interface MemberItem extends thing{
  name: string;
  family: string;
  bookname: string;
  price?: number;
  date:string;
  status:string;
}