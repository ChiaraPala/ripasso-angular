import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { ContattoComponent } from './components/contatto/contatto.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard, CanActivateChild } from './auth/auth.guard';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: '/homepage'},
  {path: 'homepage', component:  HomeComponent },
  {path: 'signup', component:  SignupComponent},
  {path: 'signin', component:  SigninComponent},
  {path: 'contatti', component: ContattiComponent, canActivate: [AuthGuard], canActivateChild: [CanActivateChild], children: [
   {path: ':id', component: ContattoComponent}
  ]},
   {path: '404', component: NotfoundComponent },
   {path: '**', redirectTo: '/400'}
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 