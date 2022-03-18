import { Component, OnInit } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';
import { PopUp } from 'src/app/models/pop-up.model';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  constructor(public popUpsService:PopUpsService) { }

  ngOnInit(): void {
  }

  showPopUp()
  {
    this.popUpsService.setSelectedPopUp(PopUp.popUpTip);
  }

}
