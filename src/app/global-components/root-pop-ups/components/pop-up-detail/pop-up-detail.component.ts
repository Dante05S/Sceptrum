import { DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject,Renderer2 } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';

@Component({
  selector: 'app-pop-up-detail',
  templateUrl: './pop-up-detail.component.html',
  styleUrls: ['./pop-up-detail.component.css']
})
export class PopUpDetailComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document:Document, private popUpsService:PopUpsService, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body,'overflow-hidden');
  }

  closePopUp()
  {
    this.popUpsService.closePopUp();
    this.renderer.removeClass(this.document.body,'overflow-hidden');
  }

}
