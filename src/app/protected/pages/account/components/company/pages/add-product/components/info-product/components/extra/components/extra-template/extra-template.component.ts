import { Component, Input, OnInit } from '@angular/core';
import { PopUp } from 'src/app/models/pop-up.model';
import { Section } from 'src/app/models/section.model';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';
import { SectionsService } from 'src/app/services/sections/sections.service';

@Component({
  selector: 'app-extra-template',
  templateUrl: './extra-template.component.html',
  styleUrls: ['./extra-template.component.css']
})
export class ExtraTemplateComponent implements OnInit {
  
  @Input()section:Section = 
  {
    id:0,
    required: false,
    name:'',
    type: 0,
    maxOp: 0,
    options: []
  };
  
  constructor(public popUpsService:PopUpsService) { }

  ngOnInit(): void {
    
  }

  updateExtra(){
    this.popUpsService.setEdit(true);
    this.popUpsService.setSection(this.section);
    this.popUpsService.setSelectedPopUp(PopUp.popUpAddExtra); 
  }

  addOption(){
    this.popUpsService.setEdit(false);
    this.popUpsService.setSection(this.section);
    this.popUpsService.setSelectedPopUp(PopUp.popUpAddOption);
  }

}
