import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { AlignmentsComponent } from './alignments/alignments.component';
import { FeatsComponent } from './feats/feats.component';
import { FeaturesComponent } from './features/features.component';
import { SkillsComponent } from './skills/skills.component';
import { TraitsComponent } from './traits/traits.component';
import { RouterModule } from '@angular/router';
import { TraitsDetailsComponent } from './traits-details/traits-details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BackgroundsComponent,
    AlignmentsComponent,
    FeatsComponent,
    FeaturesComponent,
    SkillsComponent,
    TraitsComponent,
    TraitsDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  exports: [
    AlignmentsComponent,
    BackgroundsComponent,
    FeatsComponent,
    FeaturesComponent,
    SkillsComponent,
    TraitsComponent,
    TraitsDetailsComponent
  ]
})
export class CharactersModule { }
