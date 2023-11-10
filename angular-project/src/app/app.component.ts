import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  isVisible = true;
  persone = [
    {nome: "luca", cognome:"rossi", color: "red"},
    {nome: "anna", cognome:"verdi", color: "pink"},
    {nome: "marco", cognome:"bianchi", color: "yellow"},
  ]

  numero = 3;

  
  onInput(event: Event){
    console.log((<HTMLInputElement>event.target).value)
  }

  onClick(event: Event){
    this.title = "ho cliccato sul bottone"
  }
}
