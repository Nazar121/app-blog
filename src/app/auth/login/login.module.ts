import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { LoginRoutingModule } from './login-routing.module';

// material
import { MaterialModule } from '../../material/material.module';

// components
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
