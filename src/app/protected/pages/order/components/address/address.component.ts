import { Component, OnInit,ViewChild, Renderer2, ElementRef} from '@angular/core';
import {PopUp} from '../../../../../models/pop-up.model';
import { PopUpsService } from '../../../../../services/pop-ups.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @ViewChild('details') details!: ElementRef;
  asDetails:any;
  detailsOrder: string = '';

  constructor(private renderer:Renderer2, private popUpsService:PopUpsService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit()
  {
    this.asDetails = this.details.nativeElement;
  }

  showAddress()
  {
    this.popUpsService.setSelectedPopUp(PopUp.popUpAddress);
  }

  saveDetail()
  {
    this.detailsOrder = this.asDetails.value;
  }

  cancelDetail()
  {
    this.asDetails.value = this.detailsOrder;
  }

  deleteDetail():void
  {
    this.asDetails.value = '';
  }

}
