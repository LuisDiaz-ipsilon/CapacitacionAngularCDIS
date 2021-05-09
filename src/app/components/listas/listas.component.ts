import { Component, OnInit } from '@angular/core';

import { Automovil } from '../../model';
import { AutosService } from '../../services/autos.service';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
  page=1;
  pageSize=10;
  automoviles: Automovil[];
  autoSelect: Automovil;
  habilitarDesc: boolean;
  public isCollapsed = false;
  constructor(private autosService: AutosService) {
  }

  ngOnInit() {
    this.autosService.getAutos().subscribe(response=>{
      this.automoviles=response.data;
    })
  }

  onSelect(auto: Automovil) {
    this.autoSelect = auto;
    this.habilitarDesc = true;
  }

}
