import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../model';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  automoviles: Automovil[];
  autoSelect: Automovil;
  habilitarDesc: boolean;
  public isCollapsed = false;
  constructor() {
  }

  ngOnInit() {
    this.automoviles = AUTOMOVILES;
  }

  onSelect(auto: Automovil) {
    this.autoSelect = auto;
    this.habilitarDesc = true;
  }

}
