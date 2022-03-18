import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PopUp } from 'src/app/models/pop-up.model';
import { Option } from 'src/app/models/option.model';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';
import { SectionsService } from 'src/app/services/sections/sections.service';

@Component({
  selector: 'app-pop-up-add-option',
  templateUrl: './pop-up-add-option.component.html',
  styleUrls: ['./pop-up-add-option.component.css']
})
export class PopUpAddOptionComponent implements OnInit {

  title:string = 'Eliminar esta sección'
  text:string = '¿Estás seguro de que deseas eliminar esta sección?'
  private option:Option = 
  {
    id: 0,
    name: '',
    val:0
  }
  private idSection:number = 0;

  formOption: FormGroup = new FormGroup({});
  show:boolean = false;

  constructor(@Inject(DOCUMENT) private document:Document, private formBuilder: FormBuilder,public popUpsService:PopUpsService, private sectionsServices:SectionsService, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body,'overflow-hidden');
    
    if(this.popUpsService.isEdit()){
      this.option = this.popUpsService.getOption();
    }
    
    this.idSection = this.popUpsService.getSection().id;

    this.formOption = this.formBuilder.group(
      {
        name:[this.option.name],
        val:[this.option.val]
      }) 
  }

  saveOption(){

    const data:Option = 
      {
        id: this.option.id,
        ...this.formOption.value,
      }

    if(!this.popUpsService.isEdit()){
      this.sectionsServices.addOption(data,this.idSection);
    }
    else{
      this.sectionsServices.updateOption(data,this.idSection);
    }

    
    this.closePopUp();
  }

  closePopUp(){
    this.renderer.removeClass(this.document.body,'overflow-hidden');
    this.popUpsService.setSelectedPopUp(PopUp.close)
  }

  deleteName(){
    this.formOption.get('name')?.setValue('');
  }

  close()
  {
    this.show = false;   
  }

  deleteOption(){
    this.show = true;
  }

  confirmDelete(confirm:boolean){
    this.close();
    if(confirm){
      this.sectionsServices.deleteOption(this.option.id,this.idSection);
      this.closePopUp();
    }
  }

}
