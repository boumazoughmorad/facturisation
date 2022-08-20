import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AjoutuserComponent } from './ajoutuser/ajoutuser.component';
import { CountUserComponent } from './count-user/count-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
    path: '',
    component: AdduserComponent
  },
  {
    path: 'ajouterUser',
    component: AjoutuserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'count',
    component: CountUserComponent
  },
  {
    path: 'list_user',
    component: ListUsersComponent
  },
  {
    path: 'update/:id',
    component: UpdateUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
