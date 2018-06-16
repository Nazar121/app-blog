import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

// components

const ROUTES: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
