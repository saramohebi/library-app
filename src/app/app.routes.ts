import { Routes } from '@angular/router';
import { Loginpage } from './+public/+pages/loginpage/loginpage';
import { Privatetempelate } from './+private/privatetempelate/privatetempelate';
import { privateGuard } from './+shared/private-guard';

export const routes: Routes = [
    {path:'login',component:Loginpage},
    {path:'private',canActivate:[privateGuard],component:Privatetempelate,children:[

    ]},
    {path:'',redirectTo:'private',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];

