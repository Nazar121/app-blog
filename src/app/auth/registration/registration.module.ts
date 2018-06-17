import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { RegistrationRoutingModule } from './registration-routing.module';

// material
import { MaterialModule } from '../../material/material.module';

// components
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MaterialModule
  ],
  declarations: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
