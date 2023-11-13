import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from './services/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'corso angular'
   
constructor( private servizioProva: ServizioProvaService){

}
  ngOnInit(): void {
  console.log('appcomponent' , this.servizioProva.persone)
  }
}
