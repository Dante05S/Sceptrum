import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  Empresas:Array<any> = [
    {nombre: 'El corral',
    direccion: 'carrera 3 #3-42',
    calificacion: '***'
  }
  ]

  Menus:Array<any> = [
    {titulo: 'Combo Whopper',
    descripcion: 'Hamburguesa con pan con ajonjolí, carne de res artesanal 115 g, tajada cheddar, tomate, lechuga y cebolla grillé',
    precio: '17.900,00'
  },
  {titulo: 'Combo Whopper',
    descripcion: 'Hamburguesa con pan con ajonjolí, carne de res artesanal 115 g, tajada cheddar, tomate, lechuga y cebolla grillé',
    precio: '17.900,00'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
