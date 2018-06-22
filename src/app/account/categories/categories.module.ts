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
import { DeleteDialogComponent } from '../shared/components/delete-dialog/delete-dialog.component';
import { CurrentCategoryComponent } from './current-category/current-category.component';
import { PostComponent } from './post/post.component';
import { CurrentPostComponent } from './current-post/current-post.component';

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
    DeleteDialogComponent,
    CurrentCategoryComponent,
    PostComponent,
    CurrentPostComponent
  ],
  entryComponents: [
    CECategoryDialogComponent,
    DeleteDialogComponent
  ]
})
export class CategoriesModule { }
