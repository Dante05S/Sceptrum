import { Component, OnInit } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';
import { PopUp } from 'src/app/models/pop-up.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private popUpsService:PopUpsService) { }

  ngOnInit(): void {
  }

  showPopUp()
  {
    this.popUpsService.setSelectedPopUp(PopUp.popUpDetail);
  }

}
