import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent implements OnInit {

  @Output() addCreditCardEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addCreditCard()
  {
    this.addCreditCardEvent.emit(1);
  }

}
