import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ProfileComponent } from './profile/profile.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { RaceDetailsRoutingModule } from './race-details-routing.module';

@NgModule({
  declarations: [RaceDetailComponent, /*ProfileComponent*/],
  imports: [
    CommonModule,
    RaceDetailsRoutingModule
  ]
})
export class RaceDetailsModule { }
