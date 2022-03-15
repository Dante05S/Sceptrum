import { Component, OnInit,ViewChild,ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('address') address!:ElementRef;
  asAddress:any;
  @Output() codEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this.asAddress = this.address.nativeElement;
  }

  deleteAddress()
  {
    this.asAddress.value = '';
  }

  closePopUp(){
    this.codEvent.emit(0);
  }

}
