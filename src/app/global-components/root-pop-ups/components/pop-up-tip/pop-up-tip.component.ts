import { DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject,Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';

@Component({
  selector: 'app-pop-up-tip',
  templateUrl: './pop-up-tip.component.html',
  styleUrls: ['./pop-up-tip.component.css']
})
export class PopUpTipComponent implements OnInit {

  @ViewChild('amount') amount!:ElementRef;
  asAmount:any;

  constructor(@Inject(DOCUMENT) private document:Document, public popUpsService:PopUpsService, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body,'overflow-hidden');
  }

  ngAfterViewInit()
  {
    this.asAmount = this.amount.nativeElement;
  }

  saveTip()
  {
    this.popUpsService.setAmount(this.asAmount.value);
    this.closePopUp();
  }

  deleteAmount()
  {
    this.asAmount.value = '';
  }

  closePopUp()
  {
    this.popUpsService.closePopUp();
    this.renderer.removeClass(this.document.body,'overflow-hidden');
  }

}
