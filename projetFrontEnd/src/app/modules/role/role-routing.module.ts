import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeRolesComponent } from './liste-roles/liste-roles.component';

const routes: Routes = [
  
  {
    path: 'listeRoles',
    component: ListeRolesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
