import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {

  mostrarVista: boolean;
  //true para mostrar lista, por default se mostrara la lista.

  constructor() { 
    this.mostrarVista=true;
  }

  verLista(){
    this.mostrarVista=true;
  }

  verTabla(){
    this.mostrarVista=false;
  }
  
  ngOnInit(){

  }

}
