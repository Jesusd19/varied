import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent {

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( param => {
      console.log("Ruta Padre");      
      console.log(param);
    })
  }

  

}
