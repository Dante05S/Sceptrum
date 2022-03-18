import { Component, Input, OnInit } from '@angular/core';
import { PopUp } from 'src/app/models/pop-up.model';
import { Option } from 'src/app/models/option.model';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';

@Component({
  selector: 'app-option-template',
  templateUrl: './option-template.component.html',
  styleUrls: ['./option-template.component.css']
})
export class OptionTemplateComponent implements OnInit {

  @Input() option:Option = {
    id:0,
    name:'',
    val: 0
  };
  @Input() index:number = 0;
  @Input() type:number = 0;

  constructor(private popUpsService:PopUpsService) { }

  ngOnInit(): void {
  }

  updateOption(){
    this.popUpsService.setEdit(true);
    this.popUpsService.setOption(this.option);
    this.popUpsService.setSelectedPopUp(PopUp.popUpAddOption); 
  }

  getInput(){
    if(this.type === 1){
      return 'radio'
    }
    
    return 'checkbox'

  }

  getId(){
    return `${this.index}_${this.option.id}` 
  }

}
