import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { ClassDetailsComponent } from './classes/class-details/class-details.component';
import { AppComponent } from './app.component';
import { RaceListComponent } from './races/race-list/race-list.component';
import { RaceDetailsComponent } from './races/race-details/race-details.component';

/*  NEED TO ADD IN A WILDCARD ROUTE HERE AS WELL AS A CATCH ALL FOR PAGE CANNOT BE FOUND */
const routes: Routes = [
  {path: 'classList', component: ClassListComponent},
  {path: 'classDetails/:name', component: ClassDetailsComponent},
  {path: 'raceList', component: RaceListComponent},
  {path: 'raceDetails/:name', component: RaceDetailsComponent},
  {path: 'home', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
