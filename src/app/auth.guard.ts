import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) {
    //this._authService = false;
  }

  canActivate(): boolean {
    debugger
    if (2 > 3) {
      return true;
    } else {
      this._router.navigate(['/signin']);
      return false;
    }
  }

}
