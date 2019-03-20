import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clases",
  templateUrl: "./clases.component.html",
  styles: []
})
export class ClasesComponent implements OnInit {
  alert: string = "alert-primary";
  loading: boolean = false;

  propiedades: Object = {
    danger: false
  };

  constructor() {}

  ngOnInit() {}

  ejecutar() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 3000);
  }
}
