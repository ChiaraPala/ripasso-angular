import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field';

import { HighlightDirective } from './direttive/highlight.directive';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { ContattoComponent } from './components/contatto/contatto.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    HighlightDirective,
    ContattiComponent,
    HomeComponent,
    ContattoComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
