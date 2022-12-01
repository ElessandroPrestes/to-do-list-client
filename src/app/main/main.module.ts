import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { UsersComponent } from './users/users.component';
import { ListsComponent } from './lists/lists.component';


@NgModule({
  declarations: [
    UsersComponent,
    ListsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
