import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ServizioProvaService } from 'src/app/services/servizio-prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  persone: any 

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
//this.persone  = this.servizioProva.getPersone()
  this.firebase.getPersona('https://angular-project-a0724-default-rtdb.europe-west1.firebasedatabase.app/persone.json')
  .subscribe((data: any )=> {
    // console.log(data)
    // console.log(Object.keys(data))
    this.persone = Object.keys(data).map((key) => {
      data[key]['id'] = key
      return data[key]})
    console.log(this.persone)
  })
   
  }
  
}   
