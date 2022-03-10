import { Injectable } from '@angular/core';
import { PopUp } from '../models/pop-up.model';

@Injectable({
  providedIn: 'root'
})
export class PopUpsService {
  
  private selectedPopUp:PopUp = PopUp.close;

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
}
