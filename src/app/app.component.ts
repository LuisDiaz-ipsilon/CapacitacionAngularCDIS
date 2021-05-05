import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-catalogo';

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

}
