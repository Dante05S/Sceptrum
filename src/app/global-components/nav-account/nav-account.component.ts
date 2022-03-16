import { Component, OnInit } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups.service';
import { PopUp } from 'src/app/models/pop-up.model';

@Component({
  selector: 'app-nav-account',
  templateUrl: './nav-account.component.html',
  styleUrls: ['./nav-account.component.css']
})
export class NavAccountComponent implements OnInit {

  constructor(private popUpsService:PopUpsService) { }

  ngOnInit(): void {
  }

  showPopUp()
  {
    this.popUpsService.setSelectedPopUp(PopUp.popUpAddAddress);
  }

}
