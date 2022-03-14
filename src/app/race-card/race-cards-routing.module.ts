import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceListComponent } from './race-list/race-list.component';

const routes: Routes = [
  // { path: '',
    // children: [

    { path: '', component: RaceListComponent},
    // { path: 'list', component: RaceListComponent},
    // { path: '**', redirectTo: '/races', pathMatch:'full' },

    // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceCardsRoutingModule { }
