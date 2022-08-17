import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionsComponent } from './conditions/conditions.component';
import { DamageTypesComponent } from './damage-types/damage-types.component';
import { ProficienciesComponent } from './proficiencies/proficiencies.component';
import { GeneralRulesComponent } from './general-rules/general-rules.component';
import { RuleSectionsComponent } from './rule-sections/rule-sections.component';
import { RuleSectionDetailsComponent } from './rule-section-details/rule-section-details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConditionsComponent,
    DamageTypesComponent,
    ProficienciesComponent,
    GeneralRulesComponent,
    RuleSectionsComponent,
    RuleSectionDetailsComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    ConditionsComponent,
    DamageTypesComponent,
    GeneralRulesComponent,
    ProficienciesComponent,
    RuleSectionsComponent,
    RuleSectionDetailsComponent
  ]
})
export class RulesModule { }
