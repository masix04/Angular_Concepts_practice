import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { ParentRoutingModule } from './parent-routing.module';

@NgModule({
  declarations: [ParentComponent, FirstChildComponent],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
