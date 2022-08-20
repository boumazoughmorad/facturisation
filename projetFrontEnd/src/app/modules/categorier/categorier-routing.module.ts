import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterCategorierComponent } from './ajouter-categorier/ajouter-categorier.component';
import { ListCategorierComponent } from './list-categorier/list-categorier.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListCategorierComponent
  },
  {
    path: 'ajouter_categorier',
    component: AjouterCategorierComponent
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorierRoutingModule { }
