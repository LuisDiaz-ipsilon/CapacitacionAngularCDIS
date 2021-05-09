import { Component, OnInit } from '@angular/core';
import { Automovil } from '../../model';
import { AutosService } from '../../services/autos.service';



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
  collectionSize = 10; //colocar el lenght de lo que prefiera el us.
  autos: Automovil[];
  constructor(private autosService: AutosService) { }

  ngOnInit(): void {
    this.autosService.getAutos().subscribe(response=>{
      this.automoviles=response.data;
    })
  }

  onSelect(auto: Automovil) {
    this.autoSelect = auto;
  }

  refreshAutos(){
    this.autos= this.automoviles
    .map((Automovil, i)=>({id:+1, ...Automovil}))
    .slice((this.page-1)*this.pageSize, (this.page-1)*this.pageSize+this.pageSize);
  }

}
