import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persone = [
    {nome: "luca", cognome:"rossi", isOnline: true, color: "red"},
    {nome: "anna", cognome:"verdi", isOnline: false,color: "pink"},
    {nome: "marco", cognome:"bianchi",isOnline: true, color: "yellow"},
  ]
  onClick(){
   
  this.persone = [
    {nome: "giulio", cognome:"rossi", isOnline: true, color: "green"},
    {nome: "lucia", cognome:"verdi", isOnline: false,color: "pink"},
    {nome: "fabio", cognome:"bianchi",isOnline: true, color: "yellow"},
  ]
  }
}
