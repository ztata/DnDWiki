import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { ClassDetailsComponent } from './classes/class-details/class-details.component';
import { RaceListComponent } from './races/race-list/race-list.component';
import { RaceDetailsComponent } from './races/race-details/race-details.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { SpellListComponent } from './spells/spell-list/spell-list.component';
import { SchoolsOfMagicComponent } from './spells/schools-of-magic/schools-of-magic.component';
import { MonstersDetailsComponent } from './world-building/monsters-details/monsters-details.component';
import { MonstersListComponent } from './world-building/monsters-list/monsters-list.component';
import { LanguagesComponent } from './world-building/languages/languages.component';
import { AlignmentsComponent } from './characters/alignments/alignments.component';
import { BackgroundsComponent } from './characters/backgrounds/backgrounds.component';
import { FeatsComponent } from './characters/feats/feats.component';
import { FeaturesComponent } from './characters/features/features.component';
import { SkillsComponent } from './characters/skills/skills.component';
import { TraitsComponent } from './characters/traits/traits.component';
import { MagicItemsComponent } from './equipment/magic-items/magic-items.component';
import { StandardItemsComponent } from './equipment/standard-items/standard-items.component';
import { WeaponPropertiesComponent } from './equipment/weapon-properties/weapon-properties.component';
import { ItemCategoryComponent } from './equipment/item-category/item-category.component';
import { ConditionsComponent } from './rules/conditions/conditions.component';
import { DamageTypesComponent } from './rules/damage-types/damage-types.component';
import { GeneralRulesComponent } from './rules/general-rules/general-rules.component';
import { ProficienciesComponent } from './rules/proficiencies/proficiencies.component';
import { RuleSectionsComponent } from './rules/rule-sections/rule-sections.component';
import { RuleSectionDetailsComponent } from './rules/rule-section-details/rule-section-details.component';


const routes: Routes = [
  { path: 'classList', component: ClassListComponent },
  { path: 'classDetails/:name', component: ClassDetailsComponent },
  { path: 'raceList', component: RaceListComponent },
  { path: 'raceDetails/:name', component: RaceDetailsComponent },
  { path: 'spellList', component: SpellListComponent },
  { path: 'spellList/:name', component: SpellListComponent },
  { path: 'schoolsOfMagic', component: SchoolsOfMagicComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'languages/:name', component: LanguagesComponent },
  { path: 'monsterList', component: MonstersListComponent },
  { path: 'monsterDetails/:name', component: MonstersDetailsComponent },
  { path: 'alignments', component: AlignmentsComponent },
  { path: 'backgrounds', component: BackgroundsComponent },
  { path: 'feats', component: FeatsComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'traits', component: TraitsComponent },
  { path: 'traits/:name', component: TraitsComponent },
  { path: 'magicItems', component: MagicItemsComponent },
  { path: 'items', component: StandardItemsComponent },
  { path: 'itemCategory/:name', component: ItemCategoryComponent },
  { path: 'weaponProperties', component: WeaponPropertiesComponent },
  { path: 'weaponProperties/:name', component: WeaponPropertiesComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'damageTypes', component: DamageTypesComponent },
  { path: 'damageTypes/:name', component: DamageTypesComponent },
  { path: 'generalRules', component: GeneralRulesComponent },
  { path: 'proficiencies', component: ProficienciesComponent },
  { path: 'ruleSections', component: RuleSectionsComponent },
  { path: 'ruleSections/:name', component: RuleSectionDetailsComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
