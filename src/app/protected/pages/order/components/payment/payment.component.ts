import { Component, OnInit } from '@angular/core';
import { PopUp } from 'src/app/models/pop-up.model';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private popUpsService:PopUpsService) { }

  ngOnInit(): void {
  }

  showPopUp()
  {
    this.popUpsService.setSelectedPopUp(PopUp.popUpPayment);
  }

}
