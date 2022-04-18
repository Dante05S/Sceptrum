import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-first',
  templateUrl: './nav-first.component.html',
  styleUrls: ['./nav-first.component.css']
})
export class NavFirstComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(path:string){
    this.router.navigate([path]);
  }

}
