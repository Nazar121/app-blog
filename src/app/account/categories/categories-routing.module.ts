import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { CategoriesComponent } from './categories.component';
import { CurrentCategoryComponent } from './current-category/current-category.component';
import { CurrentPostComponent } from './current-post/current-post.component';
import { CEPostComponent } from './ce-post/ce-post.component';

const ROUTES: Routes = [
  { path: '', children: [
    { path: '', component: CategoriesComponent },
    { path: 'category', children: [
      { path: '', component: CurrentCategoryComponent },
      { path: 'create-post', component: CEPostComponent },
      { path: 'post', children: [
        { path: '', component: CurrentPostComponent },
        { path: 'edit-post', component: CEPostComponent }
      ] }
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
