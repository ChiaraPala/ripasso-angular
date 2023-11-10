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
onRiceviDati(value: string){
  console.log(value)

}
}
