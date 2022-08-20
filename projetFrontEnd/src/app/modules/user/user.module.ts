import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdduserComponent } from './adduser/adduser.component';

import { HttpClientModule } from '@angular/common/http';
import { AjoutuserComponent } from './ajoutuser/ajoutuser.component';
import { LoginComponent } from './login/login.component';
import { CountUserComponent } from './count-user/count-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ListUsersComponent } from './list-users/list-users.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateUserComponent } from './update-user/update-user.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    AdduserComponent,
    AjoutuserComponent,
    LoginComponent,
    CountUserComponent,
    ListUsersComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MaterialModule
  ]
})
export class UserModule { }
