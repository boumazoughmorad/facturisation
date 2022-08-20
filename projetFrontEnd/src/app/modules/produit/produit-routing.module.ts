import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';

const routes: Routes = [
  {
    path: '',
    component: AddproduitComponent
  },
  {
    path: 'liste',
    component: ListProduitComponent
  },
  {
    path: 'ajouterProduit',
    component: AjouterProduitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
