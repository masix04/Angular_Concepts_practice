import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent} from './profile.component';

const routes: Routes = [
  // { path: 'races',
  //   children: [

    { path: '', component: ProfileComponent},
    // { path: 'list', component: ProfileComponent},
    // { path: '**', redirectTo: '/races/profiles', pathMatch:'full' },

  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
