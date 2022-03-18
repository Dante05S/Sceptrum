import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';

@Component({
  selector: 'app-pop-up-name',
  templateUrl: './pop-up-name.component.html',
  styleUrls: ['./pop-up-name.component.css']
})
export class PopUpNameComponent implements OnInit {

  @ViewChild('name') name!:ElementRef;
  asName:any;

  constructor(@Inject(DOCUMENT) private document:Document, public popUpsService:PopUpsService, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body,'overflow-hidden');
  }

  ngAfterViewInit()
  {
    this.asName = this.name.nativeElement;
  }

  closePopUp(){
    this.popUpsService.closePopUp();
    this.renderer.removeClass(this.document.body,'overflow-hidden');
  }

  deleteName(){
    this.asName.value = '';
  }

  saveName(){
    this.popUpsService.setName(this.asName.value);
    this.closePopUp();
  }

}
