import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, OnChanges{
  @Input() data: any;

  constructor(){ 
    console.log("costruttore")
  }
  
  ngOnInit(): void {
    console.log(this.data)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
