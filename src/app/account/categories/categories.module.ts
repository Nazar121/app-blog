import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { CategoriesRoutingModule } from './categories-routing.module';

// modules
import { MaterialModule } from '../../material/material.module';

// components
import { CategoriesComponent } from './categories.component';
import { CECategoryDialogComponent } from './ce-category-dialog/ce-category-dialog.component';
import { CategoryComponent } from './category/category.component';
import { DCategoryDialogComponent } from './d-category-dialog/d-category-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CategoriesRoutingModule
  ],
  declarations: [
    CategoriesComponent,
    CECategoryDialogComponent,
    CategoryComponent,
    DCategoryDialogComponent
  ],
  entryComponents: [
    CECategoryDialogComponent,
    DCategoryDialogComponent
  ]
})
export class CategoriesModule { }
