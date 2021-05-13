import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VistasComponent } from './components/vistas/vistas.component';
import { ListasComponent } from './components/listas/listas.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './components/table/table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddUpdateComponent } from './components/modals/modal-add-update/modal-add-update.component';
import { ModalDetailAutoComponent } from './components/modals/modal-detail-auto/modal-detail-auto.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from './components/modals/confirm-delete/confirm-delete.component';
import { RangoYearDirective } from './directives/rango-year.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListasComponent,
    TableComponent,
    NotFoundComponent,
    ModalAddUpdateComponent,
    ModalDetailAutoComponent,
    ConfirmDeleteComponent,
    RangoYearDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalDetailAutoComponent, ModalAddUpdateComponent]
})
export class AppModule { }
