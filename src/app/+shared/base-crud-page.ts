import { inject } from "@angular/core";
import { thing } from "./base-thing";
import { BaseService } from "./base-service";

export class BaseCrudPage<T extends thing>{
//    ngOnInit(): void {
//    this.refreshData();
//   }
  dataService!:BaseService<T>;
  data: T[] = [];
  state:string='list';
  item!:T;
  refreshData(){
    this.data=this.dataService.list();
  }
  add() {
    this.state= 'add';
    this.addPrepair();
    
    this.state='add';
}
  addPrepair(){
    }
  edit(book:T) {
    this.item={...book};
    this.state='edit';
}
  save() {
    if(this.state=='add'){
      this.dataService.add(this.item);
    }
    else if(this.state=='edit'){
      this.dataService.edit(this.item);
    }
    else if(this.state=='remove'){
      this.dataService.remove(this.item);
    }
    this.refreshData();
    this.state='list';
}
  cancel() {
    this.state='list';
}
  remove(book:T) {
    this.item={...book};
    this.state='remove';
}
}

function addPrepair() {
    throw new Error("Function not implemented.");
}
