import { Injectable } from '@angular/core';
import { thing } from './base-thing';


export  class BaseService <T extends thing> {
     protected data: T[] = [];
    list(){ //Read
      return [...this.data];
     }
    add(item:T) { //Create
      this.data.push(item);
     }
   edit(item:T){ //Update
    const  index=this.data.findIndex(b=>b.id==item.id)
    if(index!=-1){
      this.update(this.data[index],item);

    }
     }
     remove(item:T){ //Delete
      this.data=this.data.filter(m=>m.id!=item.id);
     }
     update(destination:T,source:T){

     }
}