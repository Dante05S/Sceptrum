import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  Empresas:Array<any> = [
    {tipo: 'Restaurantes',
    nombre: 'El corral'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
