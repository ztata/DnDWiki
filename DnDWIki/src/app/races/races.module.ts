import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceDetailsComponent } from './race-details/race-details.component';

import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    RaceListComponent,
    RaceDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  exports: [
    RaceListComponent,
    RaceDetailsComponent
  ]
})
export class RacesModule { }
