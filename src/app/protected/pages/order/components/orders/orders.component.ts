import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  activeDropdown:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showOrders()
  {
    this.activeDropdown = !this.activeDropdown;
  }

}
