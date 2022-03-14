import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';

const routes: Routes = [

  {path: 'races/racecards', loadChildren: './race-card/race-cards.module#RaceCardsModule'},
  // {path: 'details', loadChildren: "./race-details/race-details.module#RaceDetailsModule"},
  { path: '', loadChildren: './race-details/race-details.module#RaceDetailsModule' },
  // { path: 'races/details', loadChildren: './race-details/race-details.module#RaceDetailsModule' },

  {path: 'races/profiles', loadChildren: "./race-details/profile/profile.module#ProfileModule" },

  {path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' },

  { path: '**', redirectTo: 'races' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
       /** Only required Route will Load AFTER main.js */

  // imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
       /** NOTE: All Modules will work On start of Application */

  exports: [RouterModule]
})
export class AppRoutingModule { }
