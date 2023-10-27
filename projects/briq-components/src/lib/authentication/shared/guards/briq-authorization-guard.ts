import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BriqUserService } from '../services/briq-user.service';

@Injectable({
  providedIn: 'root'
})
export class BriqAuthorizationGuard implements CanActivate {
  constructor(public userService: BriqUserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.userService.getActiveUser();
    const roles = route.data.roles;

    if (user && roles.length) {
      return roles.includes(user.role);
    } else {
      return true;
    }
  }
}
