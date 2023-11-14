import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

 homeform: FormGroup 

  constructor(){}
 
  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl()
    })
  }
 
  onSubmit(){
    console.log(this.homeform)
  }

}
