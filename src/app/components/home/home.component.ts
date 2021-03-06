import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-clases></app-clases>
  <p [appResaltado]="'orange'">
    Hola mundo
  </p>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit  {

  constructor() { 
    console.log("constructor");
    
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnChanges (){
    console.log("OnChanges");
    
  }
  ngDoCheck(){
    console.log("DoCheck");
    
  }
  ngAfterContentInit(){
    console.log("AfterContentInit");
    
  }
  ngAfterContentChecked (){
    console.log("AfterContentChecked");
    
  }
  ngAfterViewInit(){
    console.log("AfterViewInit");
    
  }
  ngAfterViewChecked(){
    console.log("AfterViewChecked");
    
  }
  ngOnDestroy(){
    console.log("OnDestroy");
    
  }


}
