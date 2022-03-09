import { DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject,Renderer2 } from '@angular/core';
import { PopUpsService } from 'src/app/protected/services/pop-ups.service';

@Component({
  selector: 'app-pop-up-payment',
  templateUrl: './pop-up-payment.component.html',
  styleUrls: ['./pop-up-payment.component.css']
})
export class PopUpPaymentComponent implements OnInit {

  pages:boolean[] = [true,false];
  antPage:number = 0;
  actPage: number = 0;

  constructor(@Inject(DOCUMENT) private document:Document, private popUpsService:PopUpsService,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'overflow-hidden');
  }  

  loadPage(page:number)
  {
    this.pages[this.actPage] = false;
    this.pages[page] = true;
    this.actPage = page; 
    this.antPage = this.actPage - 1;
  }

  close()
  {
    this.popUpsService.closePopUp(); 
    this.renderer.removeClass(this.document.body,'overflow-hidden');
  }

}
