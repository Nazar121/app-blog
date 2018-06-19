import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { CategoriesComponent } from './categories.component';

const ROUTES: Routes = [
  { path: '', children: [
    { path: '', component: CategoriesComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: []
})
export class CategoriesRoutingModule { }
