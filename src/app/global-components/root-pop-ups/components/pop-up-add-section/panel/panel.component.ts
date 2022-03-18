import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  title:string = 'Eliminar esta sección'
  text:string = '¿Estás seguro de que deseas eliminar esta sección?'
  @Input() show:boolean = false;
  @Output() closeEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  close()
  {
    this.closeEvent.emit();   
  }

}
