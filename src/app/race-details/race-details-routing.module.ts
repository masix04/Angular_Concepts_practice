import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';

const routes: Routes = [
  {path: 'races',
    children : [
      // {path: '', component: RaceDetailComponent},
      // {path: 'races', component: RaceDetailComponent},
      { path: 'details', component: RaceDetailComponent },
      // {path: 'race-detail', component: RaceDetailComponent},
      // {path: 'races/profiles', component: ProfileComponent},

    // { path: '**', redirectTo: 'races', pathMatch: 'full'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceDetailsRoutingModule { }
