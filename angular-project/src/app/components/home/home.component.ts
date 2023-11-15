import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

 homeform: FormGroup 

  constructor(private firebase: FirebaseService){}
 
  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl()
    });
  }
 
  onSubmit(){
    console.log(this.homeform)
    this.firebase
    .insertPersona(
      'https://angular-project-a0724-default-rtdb.europe-west1.firebasedatabase.app/persone.json', 
      {nome: this.homeform.value.nome, email: this.homeform.value.email}
    )
    .subscribe((data) => {
      console.log(data)
    }); 
  }

  onDeletePersona(){
    this.firebase.deletePersona('https://angular-project-a0724-default-rtdb.europe-west1.firebasedatabase.app/persone', '-NjHc2kFgE67f-ABfw2T')
    .subscribe(data =>{
      console.log(data)
    })
  }

  onPatchPersona(){ 
    this.firebase.patchPersona(
      'https://angular-project-a0724-default-rtdb.europe-west1.firebasedatabase.app/persone',
      '-NjHc9JSR4NWVyJoUDPj',
      {email: 'marconeri@gmail.it'})
      .subscribe(data =>{
        console.log(data)
      })
}
}
