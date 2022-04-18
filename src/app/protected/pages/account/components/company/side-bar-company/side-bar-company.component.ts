import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-company',
  templateUrl: './side-bar-company.component.html',
  styleUrls: ['./side-bar-company.component.css']
})
export class SideBarCompanyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(path:string){
    this.router.navigate([path]);
  }

}
