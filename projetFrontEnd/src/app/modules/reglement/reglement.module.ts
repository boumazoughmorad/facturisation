import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReglementRoutingModule } from './reglement-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddreglemntComponent } from './addreglemnt/addreglemnt.component';
import { ListReglementComponent } from './list-reglement/list-reglement.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AjouterReglemntComponent } from './ajouter-reglemnt/ajouter-reglemnt.component';
import { ListReglementClientComponent } from './list-reglement-client/list-reglement-client.component';


@NgModule({
  declarations: [
    AddreglemntComponent,
    ListReglementComponent,
    AjouterReglemntComponent,
    ListReglementClientComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    ReglementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReglementModule { }
