import { DOCUMENT } from '@angular/common';
import { Component,OnInit,Renderer2,Inject } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';

@Component({
  selector: 'app-pop-up-address',
  templateUrl: './pop-up-address.component.html',
  styleUrls: ['./pop-up-address.component.css']
})
export class PopUpAddressComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private popUpsService:PopUpsService,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'overflow-hidden')
  }

  closePopUp()
  {
    this.renderer.removeClass(this.document.body, 'overflow-hidden');
    this.popUpsService.closePopUp();
  }

  saludar()
  {
    console.log("hola")
  }

}
