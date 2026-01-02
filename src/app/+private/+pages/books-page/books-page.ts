import { Component, inject, input, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { thing } from '../../../+shared/base-thing';
import { BaseCrudPage } from '../../../+shared/base-crud-page';
import { BaseCrudComponent, Column } from "../../../+shared/base-crud-component/base-crud-component";

@Component({
  selector: 'app-books-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage extends BaseCrudPage<BookItem> implements OnInit {

  ngOnInit(): void {
      this.item={
      title:'',
      writer:'',
      publisher:''
    }
   this.refreshData();
  }
  override dataService=inject(BooksService);
  override addPrepair(): void {
      this.item={
      title:'',
      writer:'',
      publisher:''
    }
  }
  booksColumn:Column[]=[
    {field:'id',title:'شناسه'},
    {field:'title',title:'عنوان'},
    {field:'writer',title:'نویسنده'},
    {field:'publisher',title:'ناشر'},
    {field:'price',title:'قیمت'}
  ]
}

export interface BookItem extends thing {
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}
