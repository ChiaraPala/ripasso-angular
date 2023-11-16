import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from './services/servizio-prova.service';
import { Observable, interval } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'corso angular'
   
constructor( private authService: AuthService){

}
  ngOnInit(): void {
    if (localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'))
      this.authService.createUser(user.mail, user.id, user._token, user._expirationDate)
    }
  }

  onLogout(){
    this.authService.logout()
  }
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
