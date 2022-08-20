import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { ListeRolesComponent } from './liste-roles/liste-roles.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ListeRolesComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    MaterialModule
  ]
})
export class RoleModule { }
