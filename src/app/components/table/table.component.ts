import { Component, OnInit } from '@angular/core';
import { Automovil } from '../../model';
import { AutosService } from '../../services/autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modals/modal-add-update/modal-add-update.component';
import { ConfirmDeleteComponent } from '../modals/confirm-delete/confirm-delete.component';
import { ModalDetailAutoComponent } from '../modals/modal-detail-auto/modal-detail-auto.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  automoviles: Automovil[];
  autoSelect: Automovil;
  page = 1;
  pageSize = 10;
  autos: Automovil[];
  autoNew: Automovil={} as Automovil;;
  constructor(private autosService: AutosService, private modalService: NgbModal) {
    //this.refreshAutos();
  }


  ngOnInit(): void {
    this.pageSize = 10;
    this.page = 1;
    this.autosService.getAutos().subscribe(response => {
      this.automoviles = response.data;
    })
  }

  openModalEdit(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editor de auto';

    modalRef.result.then(
      (auto) => {
        this.autosService.updateAuto(auto).subscribe(response => console.log(response));
      }
    ),
    (reason) => {
      console.log(reason);
    }
  }

  openModalNewAuto(){
    const modalRef= this.modalService.open(ModalDetailAutoComponent, {centered: true });
    console.log(modalRef.componentInstance.auto);
    modalRef.componentInstance.auto= modalRef.componentInstance.getAutoData();
    
    modalRef.componentInstance.accion = 'Nuevo auto';
    
    modalRef.result.then(
      (auto) => {
        this.autosService.updateAuto(auto).subscribe(response => console.log(response));
        console.log(auto);
      }
    ),
    (reason) => {
      console.log(reason);
    }
  }

  openModalDelete(auto: Automovil) {
    const modalRef = this.modalService.open(ConfirmDeleteComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(
      (autoTemp) => {
        this.autosService.deleteAuto(autoTemp).subscribe(response => {
          console.log("Se ha eliminado el auto");
          console.log(response);
        })
      },
      (reason)=>{
        console.log(reason);
      }
    )
  }

  onSelect(auto: Automovil) {
    this.autoSelect = auto;
  }


  refreshAutos() {
    this.autos = this.automoviles
      .map((Automovil, i) => ({ id: i + 1, ...Automovil }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
