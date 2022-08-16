import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesModule } from './classes/classes.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { matExpansionAnimations, MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RacesModule } from './races/races.module';
import { HomeModule } from './home/home.module';
import { SpellsModule } from './spells/spells.module';
import { WorldBuildingModule } from './world-building/world-building.module';
import { CharactersModule } from './characters/characters.module';
import { EquipmentModule } from './equipment/equipment.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClassesModule,
    HttpClientModule,
    RouterModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    RacesModule,
    HomeModule,
    SpellsModule,
    WorldBuildingModule,
    CharactersModule,
    EquipmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
