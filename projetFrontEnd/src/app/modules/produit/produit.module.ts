import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitRoutingModule } from './produit-routing.module';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
// import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [
    AddproduitComponent,
    ListProduitComponent,
    AjouterProduitComponent,
    
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,

  ]
})
export class ProduitModule { }
