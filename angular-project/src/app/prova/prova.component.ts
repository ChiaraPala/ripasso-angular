import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy {

  constructor(){ 
    console.log("costruttore")
  }
  ngOnInit(): void {
    console.log("ngOnInit ")
    
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  };

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

// Constructor: This is the class constructor. It's called when the component is instantiated.
// ngOnInit: This lifecycle hook is called after Angular has initialized all the data-bound properties of the component.
// ngAfterViewInit: This hook is called after the component's view has been initialized. It is a good place to perform actions that require the view to be fully initialized.
// ngAfterContentChecked: This hook is called after Angular checks the content of the component.
// ngAfterContentInit: This hook is called after Angular initializes the content of the component.
// ngAfterViewChecked: This hook is called after Angular checks the view of the component.
// ngDoCheck: This hook is called during every change detection run, and it allows you to implement your own change detection algorithm.
// ngOnDestroy: This hook is called just before Angular destroys the component. It's a good place to clean up resources such as subscriptions or event listeners.


}
