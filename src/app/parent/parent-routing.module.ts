import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  {
    // path: '', component: ParentComponent,
    path: '',
    children: [
     /* { path: 'first-child', component: FirstChildComponent },

      { path: '**', redirectTo: '/first-child/', pathMatch: 'full' }
      */
      { path: '', component: ParentComponent },
    ]
  },
  // { path:'parent', component: ParentComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
