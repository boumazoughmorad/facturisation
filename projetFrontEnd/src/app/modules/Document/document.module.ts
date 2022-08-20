import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ShowDocumentComponent } from './show-document/show-document.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { ListDocumentComponent } from './list-document/list-document.component';


@NgModule({
  declarations: [
    AddDocumentComponent,
    ShowDocumentComponent,
    ListDocumentComponent,
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
   
    
   ReactiveFormsModule,
  ]
})
export class DocumentModule { }
