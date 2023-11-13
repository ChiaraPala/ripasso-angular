import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //per passare dati da fuori a dentro ci serve @Input
  @Input() appHighlight= ''
  //aggiungiamo una seconda proprietà
  @Input() defaultColor = '' 

  constructor( private elemenent: ElementRef) {
   }
  
  // HostListener è un decoratore che dichiara un evento che è in ascolto, e fornisce un metodo da esguire quando l'evento si verifica 
   @HostListener('mouseenter') onMouseEnter(){
    this.cambiaColore(this.appHighlight || this.defaultColor || 'yellow ' )
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.cambiaColore('transparent') 
   }

   cambiaColore(colore: string){
    this.elemenent.nativeElement.style.backgroundColor = colore
   }
}
