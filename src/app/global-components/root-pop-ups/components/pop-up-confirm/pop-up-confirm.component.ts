import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-confirm',
  templateUrl: './pop-up-confirm.component.html',
  styleUrls: ['./pop-up-confirm.component.css']
})
export class PopUpConfirmComponent implements OnInit {

  @Input() title:string = '';
  @Input() text:string = '';
  @Output() confirmEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  confirm()
  {
    this.confirmEvent.emit(true);
  }

  close(){
    this.confirmEvent.emit(false);
  }

}
