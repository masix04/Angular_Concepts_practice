import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
// import { RaceListComponent } from './race-card/race-list/race-list.component';
// import { ProfileComponent } from './race-details/profile/profile.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
