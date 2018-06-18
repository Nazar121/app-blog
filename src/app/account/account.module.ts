import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { AccountRoutingModule } from './account-routing.module';

// modules
import { MaterialModule } from '../material/material.module';
import { SharedModule } from './shared/shared.module';

// components
import { AccountComponent } from './account.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    AccountComponent,
    HeaderComponent
  ]
})
export class AccountModule { }
