import { Injectable } from '@angular/core';
import { Option } from 'src/app/models/option.model';
import { PopUp } from 'src/app/models/pop-up.model';
import { Section } from 'src/app/models/section.model';

@Injectable({
  providedIn: 'root'
})
export class PopUpsService {
  
  private selectedPopUp:PopUp = PopUp.close;
  private amount:string = '';
  private name:string = 'Caramel Banana Pancakes';
  private edit:boolean = false;
  private section!:Section;
  private option!:Option;
  

  constructor() { }

  public setSelectedPopUp(popUp:PopUp)
  {
    this.selectedPopUp = popUp 
  }

  public getSelectedPopUp()
  {
    return this.selectedPopUp;
  }

  public closePopUp()
  {
    this.selectedPopUp = PopUp.close;
  }

  public setName(value:string)
  {
    this.name = value;
  }

  public getName()
  {
    return this.name;
  }

  public setAmount(value:string)
  {
    this.amount = value;
  }

  public getAmount()
  {
    return this.amount;
  }

  public setEdit(flag:boolean){
    this.edit = flag;
  }

  public isEdit(){
    return this.edit;
  }

  public setSection(newSection:Section){
    this.section = newSection;
  }

  public getSection(){
    return this.section;
  }

  public setOption(newOption:Option){
    this.option = newOption;
  }

  public getOption(){
    return this.option;
  }
}
