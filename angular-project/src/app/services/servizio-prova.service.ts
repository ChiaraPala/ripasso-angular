import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {
  persone = [
    {nome: "luca", cognome:"rossi", isOnline: true, color: "red"},
    {nome: "anna", cognome:"verdi", isOnline: false,color: "pink"},
    {nome: "marco", cognome:"bianchi",isOnline: true, color: "yellow"},
  ]
  constructor() { }
}
