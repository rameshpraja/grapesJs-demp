import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return this.router.createUrlTree(['/auth']);
    }
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return this.router.createUrlTree(['/auth']);
    }
  }
}
