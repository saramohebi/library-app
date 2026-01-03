import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';
import { BaseService } from '../../../+shared/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseService<MemberItem> {
     override data: MemberItem[] = [{ id: 1, name: 'سارا ', family: 'شمسی محب', bookname: 'طراحی وب', price: 12000 ,date:'آبان ماه '},
      { id: 2, name: 'کیمیا', family: 'عبدی', bookname: 'ریاضیات', price: 5000 ,date:'خرداد'},
      { id: 3, name: 'حانیه', family: 'ابراهیمی', bookname: 'ساختمان گسسته', price: 7500 ,date:'مرداد'},
      { id: 4, name: 'رها', family: 'یوسفی', bookname: 'پایگاه داده ', price: 8000 ,date:'دی'},
     ];
     override update(destination: MemberItem, source: MemberItem): void {
       destination.name=source.name;
       destination.family=source.family;
       destination.bookname=source.bookname;
       destination.price=source.price;
       destination.date=source.date;
     }
}
