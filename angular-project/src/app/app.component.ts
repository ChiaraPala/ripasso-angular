import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  
  onInput(event: Event){
    console.log((<HTMLInputElement>event.target).value)
  }

  onClick(event: Event){
    this.title = "ho cliccato sul bottone"
  }
}
