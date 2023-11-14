import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn= () => {
  console.log('siamo loggati?', inject(AuthService).isAuthenticated())
  return inject(AuthService).isAuthenticated(); 
};

export const CanActivateChild: CanActivateChildFn = () => {
  return inject(AuthService).isAdmin;
}