import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { ContattoComponent } from './components/contatto/contatto.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: ' ', pathMatch: 'full', redirectTo: '/homepage' },
  {path: ' homepage ', component:  HomeComponent },
  {path: 'contatti', component: ContattiComponent, children: [
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
 