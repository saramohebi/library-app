import { Component, inject, input, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit {

  ngOnInit(): void {
   this.refreshData();
  }
  booksService=inject(BooksService);
  data: BookItem[] = [];
  action:string='list';
  item:BookItem={
    title:'',
    writer:'',
    publisher:''
  };
  refreshData(){
    this.data=this.booksService.list();
  }
  add() {
    this.item={
    title:'',
    writer:'',
    publisher:''
    }
    this.action='add';
}
  edit(book:BookItem) {
    this.item={...book};
    this.action='edit';
}
  save() {
    if(this.action=='add'){
      this.booksService.add(this.item);
    }
    else if(this.action=='edit'){
      this.booksService.update(this.item);
    }
    else if(this.action=='remove'){
      this.booksService.remove(this.item);
    }
    this.refreshData();
    this.action='list';
}
  cancel() {
    this.action='list';
}
remove(book:BookItem) {
    this.item={...book};
    this.action='remove';
}
}

export interface BookItem {
  id?: number;
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}
