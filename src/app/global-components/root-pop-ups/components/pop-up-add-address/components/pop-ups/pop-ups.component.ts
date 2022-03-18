import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-ups',
  templateUrl: './pop-ups.component.html',
  styleUrls: ['./pop-ups.component.css']
})
export class PopUpsComponent implements OnInit {

  title:string = 'Eliminar esta dirección'
  text:string = '¿Estás seguro de que deseas eliminar esta dirección?'
  @Input() codPopUp:number = 0;
  @Output() codEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  close()
  {
    this.codEvent.emit(0);   
  }

}
