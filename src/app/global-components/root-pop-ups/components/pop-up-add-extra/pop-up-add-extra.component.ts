import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit,Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';
import { SectionsService } from 'src/app/services/sections/sections.service';
import { PopUp } from 'src/app/models/pop-up.model';
import { Section } from 'src/app/models/section.model';

@Component({
  selector: 'app-pop-up-add-extra',
  templateUrl: './pop-up-add-extra.component.html',
  styleUrls: ['./pop-up-add-extra.component.css']
})
export class PopUpAddExtraComponent implements OnInit {
  
  title:string = 'Eliminar esta sección'
  text:string = '¿Estás seguro de que deseas eliminar esta sección?'
  private section:Section = 
  {
    id: 0,
    required: false,
    name: '',
    type: 0,
    maxOp: 0,
    options: []
  }
  formExtra: FormGroup = new FormGroup({});
  show:boolean = false;

  constructor(@Inject(DOCUMENT) private document:Document, private formBuilder: FormBuilder,public popUpsService:PopUpsService, private sectionsServices:SectionsService, private renderer:Renderer2) { }

  ngOnInit(): void {
    
    this.renderer.addClass(this.document.body,'overflow-hidden');

    if(this.popUpsService.isEdit()){
      this.section = this.popUpsService.getSection();
    }
  
    this.formExtra = this.formBuilder.group(
      {
        required:[this.section.required],
        name:[this.section.name],
        type:[this.section.type],
        maxOp:[this.section.maxOp]
      }) 
  }

  saveExtra(){

    if(this.formExtra.value.type === 1){
      this.formExtra.value.maxOp = 0; 
    }

    const data:Section = 
      {
        id: this.section.id,
        ...this.formExtra.value,
        options: this.section.options
      }

    if(!this.popUpsService.isEdit()){
      this.sectionsServices.addSection(data); 
    }
    else{
      this.sectionsServices.updateSection(data);
    }

    this.closePopUp();
    
  }

  closePopUp(){
    this.renderer.removeClass(this.document.body,'overflow-hidden');
    this.popUpsService.setSelectedPopUp(PopUp.close)
  }
  deleteName(){
    this.formExtra.get('name')?.setValue('');
  }
  
  close()
  {
      this.show = false;   
  }

  deleteExtra(){
    this.show = true;
  }

  deleteConfirm(confirm:boolean){

    this.close();
    if(confirm){
      this.sectionsServices.deteleSection(this.section.id);
      this.closePopUp();
    }
  }

}
