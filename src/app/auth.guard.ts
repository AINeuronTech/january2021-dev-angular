import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedIn: boolean = true;
  constructor(private _route: Router) {

  }

  canActivate(): boolean {
    if (this.isLoggedIn === true) {
      return true;
    } else {
      this._route.navigate(['/signin']);
      return false;
    }
  }

}
