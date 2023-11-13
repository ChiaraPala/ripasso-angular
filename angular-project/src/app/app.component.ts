import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from './services/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'corso angular'
  oggi = Date.now()
  numero= 5
  colore = ''
   
constructor( private servizioProva: ServizioProvaService){

}
  ngOnInit(): void {
  console.log('appcomponent' , this.servizioProva.persone)
  }



onRiceviDati(value: string){
  console.log(value)

}

cambiaColoreEvidenziatore(colore: string){
 this.colore = colore 
}
}
