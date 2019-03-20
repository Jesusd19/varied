import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {
  
  alert:string = "danger";
  estados = ["success", "danger", "info", "warning", "default", "primary", "secondary", "light", "dark"];

  constructor() { }

  ngOnInit() {
  }
  
  changes(){
    var x = Math.floor((Math.random() * 9) + 1);
    this.alert = this.estados[x-1];
  }


}
