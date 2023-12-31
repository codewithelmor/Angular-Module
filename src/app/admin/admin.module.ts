import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    RolesComponent,
    UsersComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
