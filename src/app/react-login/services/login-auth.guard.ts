import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.signedIn()) return true;
      this.router.navigate(['/packages']);
    return false;
  }
  
  signedIn(): boolean {
    let status = false;
    if (localStorage.getItem('signedIn') === 'true') {
      status = true;
    } else status = false;
    return status;
  }

}
