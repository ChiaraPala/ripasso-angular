import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from 'src/app/services/servizio-prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  persone: any 

  constructor(private servizioProva: ServizioProvaService) { }

  ngOnInit(): void {
 this.persone  = this.servizioProva.getPersone()
   
  }
} 
