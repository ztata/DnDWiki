import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassListComponent } from './class-list/class-list.component';



@NgModule({
  declarations: [
    ClassListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClassListComponent
  ]

})
export class ClassesModule { }
