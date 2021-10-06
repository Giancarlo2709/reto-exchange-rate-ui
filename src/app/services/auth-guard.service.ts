import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree {
    if (this.tokenStorage.getToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
    
  }
}
