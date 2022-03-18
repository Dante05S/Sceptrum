import { Component, OnInit } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';
import { PopUp } from 'src/app/models/pop-up.model';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(public popUpsService:PopUpsService) { }

  ngOnInit(): void {
    
  }

  showPopUp(){
    this.popUpsService.setSelectedPopUp(PopUp.popUpName);
  }

}
