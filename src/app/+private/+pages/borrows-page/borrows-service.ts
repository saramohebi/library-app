import { Injectable } from '@angular/core';
import { BaseService } from '../../../+shared/base-service';
import { borrowsItem } from './borrows-page';

@Injectable({
  providedIn: 'root',
})
export class BorrowsService extends BaseService<borrowsItem> {
     override data: borrowsItem[] = [{id: 1,name:'سارینا', family:'محب',bookName:'مدارمنطقی',date:'شهریور',status:'منتظر پرداخت'},
      {id: 2,name:'پرناز', family:'خرمی',bookName:'ریاضیات',date:'مهر',status:'پرداخت شده'},
      {id: 3,name:'آسمان', family:'شمس',bookName:' پایگاه داده',date:'بهمن',status:'درصف بررسی'},
      {id: 4,name:'نیایش', family:'امینی',bookName:'ساختمان گسسته',date:'فروردین',status:'در صف بررسی'},
      {id: 5,name:'آزیتا', family:'روحانی',bookName:'طراحی وب',date:'تیر',status:' پرداخت شده'},
     ];
     override update(destination: borrowsItem, source: borrowsItem): void {
        destination.id=source.id;
        destination.name=source.name;
        destination.family=source.family;
        destination.bookName=source.bookName;
        destination.date=source.date;
        destination.status=source.status;
     }
}
