import { Component, OnInit } from '@angular/core';
import { Automovil } from '../../model';
import { AutosService } from '../../services/autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modals/modal-add-update/modal-add-update.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  automoviles: Automovil[];
  autoSelect: Automovil;
  page=1;
  pageSize=10;
  autos: Automovil[];
  constructor(private autosService: AutosService, private modalService: NgbModal) { 
    //this.refreshAutos();

  }


  ngOnInit(): void {
    this.pageSize=10;
    this.page=1;
    this.autosService.getAutos().subscribe(response=>{
      this.automoviles=response.data;
    })
  }

  openModalEdit(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.auto= auto;
    modalRef.componentInstance.accion= 'Editor de auto';

  }

  onSelect(auto: Automovil) {
    this.autoSelect = auto;
  }


  refreshAutos(){
    this.autos= this.automoviles
    .map((Automovil, i)=>({id: i + 1, ...Automovil}))
    .slice((this.page-1)*this.pageSize, (this.page-1)*this.pageSize+this.pageSize);
  }

}
