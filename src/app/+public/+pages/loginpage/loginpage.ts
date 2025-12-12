import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-loginpage',
  imports: [FormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
})
export class Loginpage {
  router=inject(Router);
  loginForm:LoginForm={
  username:'',
  password:'',
  keepMe:false
 };
message:string='';
check(){
  if(this.loginForm.username=='admin' && this.loginForm.password=='admin'){
    sessionStorage.setItem('token','sawqe12#$%'); 
    if(this.loginForm.keepMe==true){
      localStorage.setItem('token','sawqe12#$%');
    }
    this.router.navigateByUrl('/private');
  }
  else{
    this.message='نام کاربری یا کلمه عبور صحیح نیست';
  }
 }

}
export interface LoginForm{
  username:string;
  password:string;
  keepMe:boolean;
}