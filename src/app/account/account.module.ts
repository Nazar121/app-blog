import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { AccountRoutingModule } from './account-routing.module';

// modules
import { MaterialModule } from '../material/material.module';

// components
import { AccountComponent } from './account.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule
  ],
  declarations: [
    AccountComponent,
    HeaderComponent,
    SidenavComponent
  ]
})
export class AccountModule { }
