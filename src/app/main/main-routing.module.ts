import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'api', redirectTo: 'auth/signup' },
  { path: 'users', component: UsersComponent },
  { path: 'lists', component: ListsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
