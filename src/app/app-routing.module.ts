import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

// components

const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'account', loadChildren: './account/account.module#AccountModule' },
  // { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(ROUTES)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
