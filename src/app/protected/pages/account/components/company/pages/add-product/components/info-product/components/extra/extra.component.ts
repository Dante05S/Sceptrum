import { Component, OnInit} from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';
import { SectionsService } from 'src/app/services/sections/sections.service';
import { PopUp } from 'src/app/models/pop-up.model';
import { Section } from 'src/app/models/section.model';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  sections:Section[] = [];

  constructor(private sectionsService:SectionsService,public popUpsService:PopUpsService) { }

  ngOnInit(): void {

    this.sectionsService.getSections().subscribe(data =>
      {
        this.sections = data;
      })
     
  }

  addExtra(){
    this.popUpsService.setEdit(false);
    this.popUpsService.setSelectedPopUp(PopUp.popUpAddExtra);  
  }

  

}
