import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  //per acceder al form lato tipescript
  @ViewChild('homeform') homeform: NgForm 

  constructor(){}
 
  ngOnInit(): void {
  }
 
  onSubmit(form: NgForm){
  console.log(form)

  //per accedere al form dal ts
  //console.log(this.homeform)
  }

}
