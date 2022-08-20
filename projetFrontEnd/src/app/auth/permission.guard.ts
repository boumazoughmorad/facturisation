import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../modules/user/user-auth.service';
import { UserService } from '../modules/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userAuthService.getToken() !== null) {
      const permission = route.data['permissions'] as Array<string>;
      if (permission) {
        // const match = this.userService.permissionMatch(permission);
        // if (match) {
        //   return true;
        // } else {
        //   this.router.navigateByUrl('/error403');
        //   return false;
        // }
      }
    }
    

    this.router.navigateByUrl('/user/login');
    return false;
  
  }

}
