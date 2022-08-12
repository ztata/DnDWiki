import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages/languages.component';
import { MonstersDetailsComponent } from './monsters-details/monsters-details.component';
import { MonstersListComponent } from './monsters-list/monsters-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LanguagesComponent,
    MonstersDetailsComponent,
    MonstersListComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    LanguagesComponent,
    MonstersDetailsComponent,
    MonstersListComponent
    
  ]
})
export class WorldBuildingModule { }
