import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { CategoriesRoutingModule } from './categories-routing.module';

// modules
import { MaterialModule } from '../../material/material.module';

// components
import { CategoriesComponent } from './categories.component';
import { CECategoryComponent } from './ce-category/ce-category.component';
import { CEDialogComponent } from './ce-dialog/ce-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CategoriesRoutingModule
  ],
  declarations: [
    CategoriesComponent,
    CECategoryComponent,
    CEDialogComponent
  ],
  entryComponents: [
    CEDialogComponent
  ]
})
export class CategoriesModule { }
