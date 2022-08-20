import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { AddclientComponent } from './addclient/addclient.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateClientComponent } from './update-client/update-client.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';


@NgModule({
  declarations: [
    AddclientComponent,
    ClientComponent,
    ListClientsComponent,
    UpdateClientComponent,
    AjouterClientComponent,
    
  ],
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    ClientRoutingModule,
    // Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClientModule { }
