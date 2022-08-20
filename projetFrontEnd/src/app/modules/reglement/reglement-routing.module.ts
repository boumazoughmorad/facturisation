import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreglemntComponent } from './addreglemnt/addreglemnt.component';
import { AjouterReglemntComponent } from './ajouter-reglemnt/ajouter-reglemnt.component';
import { ListReglementClientComponent } from './list-reglement-client/list-reglement-client.component';
import { ListReglementComponent } from './list-reglement/list-reglement.component';

const routes: Routes = [
  {
    path: '',
    component: AddreglemntComponent
  },
  {
    path: 'listReglement', 
    component: ListReglementComponent
  }, 
  {
    path: 'ajouterReglemnt', 
    component: AjouterReglemntComponent
  },
  {
    path: 'listReglementClient', 
    component: ListReglementClientComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementRoutingModule { }
