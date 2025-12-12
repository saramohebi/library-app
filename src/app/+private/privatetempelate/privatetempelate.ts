import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privatetempelate',
  imports: [],
  templateUrl: './privatetempelate.html',
  styleUrl: './privatetempelate.scss',
})
export class Privatetempelate {
  router=inject(Router);
  logoff() {
    sessionStorage.clear;
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
