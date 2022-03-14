import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceCardsRoutingModule } from './race-cards-routing.module';
import { RaceListComponent } from './race-list/race-list.component';

@NgModule({
  declarations: [RaceListComponent],
  imports: [
    CommonModule,
    RaceCardsRoutingModule
  ]
})
export class RaceCardsModule { }
