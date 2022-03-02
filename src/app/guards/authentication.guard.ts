import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivateChild, CanActivate {
  constructor(private auth: AuthService) {}
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (this.auth.statusAddCourse) {
    //   return true;
    // }
    // return false;
    if (this.auth.statusAddCourse) {
      return true;
    }
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.statusAddCourse) {
      return true;
    }
    return false;
  }
}

// export class AuthenticationGuard implements CanActivate {
//   constructor(private auth: AuthService) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | boolean
//     | UrlTree
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree> {
//     if (this.auth.statusTabs) {
//       return true;
//     }
//     return false;
//   }
// }
