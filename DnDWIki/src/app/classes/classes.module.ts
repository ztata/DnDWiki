import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassService } from './class.service';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ClassListComponent,
    ClassDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  exports: [
    ClassListComponent,
    ClassDetailsComponent
  ],
  providers: [
    ClassService
  ]

})
export class ClassesModule { }
