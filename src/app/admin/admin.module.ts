import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminComponent } from './admin/admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManagePackagesComponent } from './manage-packages/manage-packages.component';


@NgModule({
  declarations: [
    AdminComponent,
    ManageUsersComponent,
    ManagePackagesComponent,
    AdminPortalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
