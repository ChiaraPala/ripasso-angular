import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: ' ', component:  HomeComponent },
  {path: 'contatti', component: ContattiComponent  },
  {path: 'contatti/:id', component: ContattiComponent  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
