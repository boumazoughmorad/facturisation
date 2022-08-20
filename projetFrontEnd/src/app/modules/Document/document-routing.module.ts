import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { ShowDocumentComponent } from './show-document/show-document.component';

const routes: Routes = [
 
  {
    path: '',
    component: AddDocumentComponent
  },

  {
    path: 'showdocument',
    component: ShowDocumentComponent
  },
  {
    path: 'list/:id',
    component: ListDocumentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
