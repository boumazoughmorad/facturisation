import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclientComponent } from './addclient/addclient.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  {
    path: '',
    component: AddclientComponent
  },
  {
    path: 'list_client',
    component: ListClientsComponent
  },
  {
    path: 'update/:id',
    component: UpdateClientComponent
  },
  {
    path: 'ajoueterClient',
    component: AjouterClientComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
