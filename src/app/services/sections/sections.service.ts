import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Option } from 'src/app/models/option.model';
import { Section } from 'src/app/models/section.model';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  private sectionArray:Section[] = []; 
  private sections$:Subject<Section[]> = new Subject<Section[]>();

  constructor() { }

  public addSection(section:Section){
    section.id = this.sectionArray.length;
    this.sectionArray.push(section);
    this.sections$.next(this.sectionArray);
  }

  public getSections()
  {
    return this.sections$.asObservable();
  }

  public updateSection(section:Section)
  {
    let index = section.id;
    this.sectionArray[index] = section;
    this.sections$.next(this.sectionArray);
  }

  public deteleSection(id:number){
    this.sectionArray.splice(id,1);
    this.sectionArray.filter(section => section.id > id).map(section => 
      {
        section.id = id;
        id++;
      });

    this.sections$.next(this.sectionArray);
  }

  public addOption(option:Option,id:number){
    option.id = this.sectionArray[id].options.length;
    this.sectionArray[id].options.push(option);
    this.sections$.next(this.sectionArray);
  }

  public updateOption(option:Option,id:number){
    let index = option.id;
    this.sectionArray[id].options[index] = option;
    this.sections$.next(this.sectionArray); 
  }

  public deleteOption(idOption:number, idSection:number){
    this.sectionArray[idSection].options.splice(idOption,1);
    this.sectionArray[idSection].options.filter(option => option.id > idOption).map(option => 
      {
        option.id = idOption;
        idOption++;
      });

    this.sections$.next(this.sectionArray);  
  }

}
