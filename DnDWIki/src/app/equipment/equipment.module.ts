import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicItemsComponent } from './magic-items/magic-items.component';
import { StandardItemsComponent } from './standard-items/standard-items.component';
import { WeaponPropertiesComponent } from './weapon-properties/weapon-properties.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MagicItemsComponent,
    StandardItemsComponent,
    WeaponPropertiesComponent,
    ItemCategoryComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    MagicItemsComponent,
    StandardItemsComponent,
    WeaponPropertiesComponent,
    ItemCategoryComponent
  ]
})
export class EquipmentModule { }
