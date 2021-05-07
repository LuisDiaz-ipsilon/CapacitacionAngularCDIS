import { Component, OnInit } from '@angular/core';
import { Automovil } from '../model';
import { AUTOMOVILES } from '../data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  automoviles: Automovil[];
  autoSelect: Automovil;
  page = 1;
  pageSize = 4;
  collectionSize = AUTOMOVILES.length;
  autos: Automovil[];
  constructor() { }

  ngOnInit(): void {
    this.automoviles = AUTOMOVILES;
  }

  onSelect(auto: Automovil) {
    this.autoSelect = auto;
  }

  refreshAutos(){
    this.autos= AUTOMOVILES
    .map((Automovil, i)=>({id:+1, ...Automovil}))
    .slice((this.page-1)*this.pageSize, (this.page-1)*this.pageSize+this.pageSize);
  }

}
