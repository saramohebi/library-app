import { Component, inject, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { thing } from '../../../+shared/base-thing';
import { BaseCrudPage } from '../../../+shared/base-crud-page';
import { BaseCrudComponent, Column } from "../../../+shared/base-crud-component/base-crud-component";
import { BorrowsService } from './borrows-service';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: 'borrows-page.html',
  styleUrl: 'borrows-page.scss',
})
export class BorrowsPage extends BaseCrudPage<borrowsItem> implements OnInit {

  ngOnInit(): void {
      this.item={
      name:'',
      family:'',
      bookName:'',
      date:'',
      status:''
    }
   this.refreshData();
  }
  override dataService=inject(BorrowsService);
  override addPrepair(): void {
      this.item={
      name:'',
      family:'',
      bookName:'',
      date:'',
      status:''
    }
  }
  borrowsColumn:Column[]=[
    {field:'id',title:'شناسه عضویت'},
    {field:'name',title:'نام '},
    {field:'family',title:'نام خانوادگی'},
    {field:'bookName',title:'نام کتاب'},
    {field:'date',title:'تاریخ'},
    {field:'status',title:'وضعیت'}
  ]
}

export interface borrowsItem extends thing {
  name: string;
  family: string;
  bookName: string;
  date: string;
  status:string;
}
