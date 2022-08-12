import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SpellDetailsComponent } from './spell-details/spell-details.component';
import { RouterModule } from '@angular/router';
import { SchoolsOfMagicComponent } from './schools-of-magic/schools-of-magic.component';



@NgModule({
  declarations: [
    SpellListComponent,
    SpellDetailsComponent,
    SchoolsOfMagicComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SpellListComponent,
    SpellDetailsComponent,
    SchoolsOfMagicComponent
  ]
})
export class SpellsModule { }
