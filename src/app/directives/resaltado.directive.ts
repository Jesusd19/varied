import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor || "yellow");
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }

  constructor(private el: ElementRef) { 
    console.log("La directiva fue llamada");
  }

  private resaltar(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
