import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { ClassDetailsComponent } from './classes/class-details/class-details.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'classList', component: ClassListComponent},
  {path: 'classDetails/:name', component: ClassDetailsComponent},
  {path: 'home', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
