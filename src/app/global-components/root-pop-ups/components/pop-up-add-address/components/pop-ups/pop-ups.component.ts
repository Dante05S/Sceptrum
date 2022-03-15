import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-ups',
  templateUrl: './pop-ups.component.html',
  styleUrls: ['./pop-ups.component.css']
})
export class PopUpsComponent implements OnInit {

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
