import { Component, EventEmitter,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Output() codEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  closePopUp(){
    this.codEvent.emit(0);
  }

}
