import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [

  // { path: 'first-child', component: FirstChildComponent },

  { path: '', loadChildren: './parent/parent.module#ParentModule' },

  // { path: '**', redirectTo: '/parent', pathMatch: 'full' }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
