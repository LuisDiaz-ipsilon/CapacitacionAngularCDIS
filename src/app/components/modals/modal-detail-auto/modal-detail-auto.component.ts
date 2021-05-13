import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../../../model';

@Component({
  selector: 'app-modal-detail-auto',
  templateUrl: './modal-detail-auto.component.html',
  styleUrls: ['./modal-detail-auto.component.css']
})
export class ModalDetailAutoComponent implements OnInit {

  accion: string;
  auto: Automovil;

  constructor(public activeModal: NgbActiveModal) { 
    
  }

  ngOnInit(): void {

  }

  getAutoData(): Automovil{
    this.auto._id=23;//document.getElementsByName("id");
    this.auto.marca="TOYOTA"//document.getElementsByName("marca");
    this.auto.descripcion="TACOMA 5 PUERTAS";
    this.auto.descripcioncorta="TACOMA 4 P SPORT TRD";
    this.auto.modelos=[2019, 2020];
    this.auto.submarca="TACOMA";
    this.auto.Ocupantes=6;
    this.auto.Cveveh="101019171615";
    return this.auto;
  }

}
