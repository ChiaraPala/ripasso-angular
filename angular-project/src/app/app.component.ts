import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso angular'
  oggi = Date.now()
  numero= 5
  colore = ''

  persone = [
    {nome: "luca", cognome:"rossi", isOnline: true, color: "red"},
    {nome: "anna", cognome:"verdi", isOnline: false,color: "pink"},
    {nome: "marco", cognome:"bianchi",isOnline: true, color: "yellow"},
  ]
onRiceviDati(value: string){
  console.log(value)

}

cambiaColoreEvidenziatore(colore: string){
 this.colore = colore 
}
}
