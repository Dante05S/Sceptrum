import { Component, OnInit } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups/pop-ups.service';
import { PopUp } from 'src/app/models/pop-up.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private popUpsService:PopUpsService,private router:Router) { }

  ngOnInit(): void {
  }

  addSection()
  {
    this.popUpsService.setEdit(false);
    this.popUpsService.setSelectedPopUp(PopUp.popUpAddSection);
  }

  updateSection()
  {
    this.popUpsService.setEdit(true);  
    this.popUpsService.setSelectedPopUp(PopUp.popUpAddSection);
  }

  addProduct(){
      this.router.navigate(['/account/menu/add-product']);
  }

}
