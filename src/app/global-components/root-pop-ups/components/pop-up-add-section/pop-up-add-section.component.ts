import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit,ViewChild,Renderer2,ElementRef } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';

@Component({
  selector: 'app-pop-up-add-section',
  templateUrl: './pop-up-add-section.component.html',
  styleUrls: ['./pop-up-add-section.component.css']
})
export class PopUpAddSectionComponent implements OnInit {

  @ViewChild('section') section!:ElementRef;
  asSection:any;
  showPopUp:boolean = false;

  constructor(@Inject(DOCUMENT) private document:Document, public popUpsService:PopUpsService, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body,'overflow-hidden');
  }

  ngAfterViewInit()
  {
    this.asSection = this.section.nativeElement;
  }

  saveSection()
  {
    this.closePopUp();
  }

  deleteText()
  {
    this.asSection.value = '';
  }

  closePopUp()
  {
    this.popUpsService.closePopUp();
    this.renderer.removeClass(this.document.body,'overflow-hidden');
  }

  deleteSection(){
    this.showPopUp = true;
  }

  closeEvent(){
    this.showPopUp = false;
  }

}
