import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from './services/servizio-prova.service';
import { Observable, interval } from 'rxjs';

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

  //creare un osservable 
  // new Observable((observer)=>{
  //   let count = 0
  //   setInterval(() =>{
  //     observer.next(count)
  //     count++;
  //   }, 1000);
  // }).subscribe((numero)=> {
  //   console.log(numero);
  // });
  }
}
