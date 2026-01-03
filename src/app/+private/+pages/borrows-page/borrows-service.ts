import { Injectable } from '@angular/core';
import { BaseService } from '../../../+shared/base-service';
import { borrowsItem } from './borrows-page';

@Injectable({
  providedIn: 'root',
})
export class BorrowsService extends BaseService<borrowsItem> {
     override data: borrowsItem[] = [{name:'سارا', family:'محب',bookName:'مدارمنطقی',date:'شهریور',status:'منتظر پرداخت'},
      {name:'پرناز', family:'خرمی',bookName:'ریاضیات',date:'مهر',status:'پرداخت شده'},
      {name:'آسمان', family:'شمس',bookName:' پایگاه داده',date:'بهمن',status:'درصف بررسی'},
      {name:'نیایش', family:'امینی',bookName:'ساختمان گسسته',date:'فروردین',status:'در صف بررسی'},
      {name:'آزیتا', family:'روحانی',bookName:'طراحی وب',date:'تیر',status:' پرداخت شده'},
     ];
     override update(destination: borrowsItem, source: borrowsItem): void {
        destination.name=source.name;
        destination.family=source.family;
        destination.bookName=source.bookName;
        destination.date=source.date;
        destination.status=source.status;
     }
}
