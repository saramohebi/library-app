import { Routes } from '@angular/router';
import { Loginpage } from './+public/+pages/loginpage/loginpage';
import { Privatetempelate } from './+private/privatetempelate/privatetempelate';
import { privateGuard } from './+shared/private-guard';
import { DashboardPage } from './+private/+pages/dashboard-page/dashboard-page';
import { BooksPage } from './+private/+pages/books-page/books-page';
import { MembersPage } from './+private/+pages/members-page/members-page';
import { BorrowsPage } from './+private/+pages/borrows-page/borrows-page';
import { ReportsPage } from './+private/+pages/reports-page/reports-page';

export const routes: Routes = [
    {path:'login',component:Loginpage},
    {path:'private',canActivate:[privateGuard],component:Privatetempelate,children:[
        {path:'dashboard',component:DashboardPage},
        {path:'books',component:BooksPage},
        {path:'members',component:MembersPage},
        {path:'borrows',component:BorrowsPage},
        {path:'reports',component:ReportsPage},
        {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
        {path:'**',redirectTo:'dashboard'},
    ]},
    {path:'',redirectTo:'private',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];

