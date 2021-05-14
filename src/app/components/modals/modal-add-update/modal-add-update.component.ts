import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../../../model';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {

  accion: string;
  auto: Automovil;

  firstYear: number;
  lastYear: number;
  arrModels: number[];

  constructor(public activeModal: NgbActiveModal ) {
   
   }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.activeModal.close(this.auto);
  }
  
  crearArrYears(yearI: number, yearF: number): number[]{
    if(yearI===yearF){
      this.arrModels[0]=yearI;
      console.log(this.arrModels);
    } else if (yearI<yearF){
      let position: number=0;
      for (let year = yearI; year <= yearF; year++) {
        this.arrModels[position]=year;
        position++;
      }
    }
    return this.arrModels;
  }

  getArrYears(): number[]{
    return this.arrModels;
  }
  
 

}
