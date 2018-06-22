import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { CategoriesComponent } from './categories.component';
import { CurrentCategoryComponent } from './current-category/current-category.component';
import { CurrentPostComponent } from './current-post/current-post.component';

const ROUTES: Routes = [
  { path: '', children: [
    { path: '', component: CategoriesComponent },
    { path: 'category', children: [
      { path: '', component: CurrentCategoryComponent },
      { path: 'post', component: CurrentPostComponent }
    ] }
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: []
})
export class CategoriesRoutingModule { }
