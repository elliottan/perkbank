import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // Inject Router so we can hand off the user to the Login Page 
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (sessionStorage.getItem('x-auth')) {
       // Token from the login is available, so the user can pass to the route
       return true
    } else  {
       // Token from the login is not available because something went wrong or the user wants to go over the url to the site
       this.router.navigate(["/login-select"]);
       return false
     }
  }
}
