import { DOCUMENT } from '@angular/common';
import { Component,OnInit,Inject,Renderer2, ElementRef, ViewChild } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups.service';

@Component({
  selector: 'app-pop-up-add-address',
  templateUrl: './pop-up-add-address.component.html',
  styleUrls: ['./pop-up-add-address.component.css']
})
export class PopUpAddAddressComponent implements OnInit {

  @ViewChild('address') address!:ElementRef;
  asAddress:any;
  codPopUp:number = 0;
  addressInput: string = '';

  constructor(@Inject(DOCUMENT) private document:Document, private popUpsService:PopUpsService, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body,'overflow-hidden');
  }

  ngAfterViewInit()
  {
    this.asAddress = this.address.nativeElement;
  }

  saveAddress(){
    this.addressInput = this.asAddress.value;
  }

  delete()
  {
    this.asAddress.value = '';
  }

  getCod(cod:number){
    this.codPopUp = cod;
  }

  closePopUp(){
    this.popUpsService.closePopUp();
    this.renderer.removeClass(this.document.body,'overflow-hidden');
  }

  editAddress()
  {
    this.codPopUp = 1;
  }

  deleteAddress()
  {
    this.codPopUp = 2;
  }

}
