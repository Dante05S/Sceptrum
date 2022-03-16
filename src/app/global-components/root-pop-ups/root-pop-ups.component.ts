import { Component, OnInit,Renderer2,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PopUpsService } from 'src/app/services/pop-ups.service';
import { PopUp } from 'src/app/models/pop-up.model';

@Component({
  selector: 'app-root-pop-ups',
  templateUrl: './root-pop-ups.component.html',
  styleUrls: ['./root-pop-ups.component.css']
})
export class RootPopUpsComponent implements OnInit {

  popUpModel = PopUp;

  constructor(@Inject(DOCUMENT) private document: Document,public popUpsService:PopUpsService,private renderer:Renderer2) {}

  ngOnInit(): void {
    
  }

  close()
  {
    this.renderer.removeClass(this.document.body, 'overflow-hidden');
    this.popUpsService.closePopUp();
  }

}
