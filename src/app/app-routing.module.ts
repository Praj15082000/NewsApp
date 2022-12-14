import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HealthComponent } from './components/health/health.component';
import { ScienceComponent } from './components/science/science.component';
import { SportComponent } from './components/sport/sport.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { TopheadlineComponent } from './components/topheadline/topheadline.component';

const routes: Routes = [
  {path  : '', component : TopheadlineComponent}, //topheadlin and home
  {path  : 'tech', component : TechnologyComponent},//tech news and home
  {path  : 'busy', component : BusinessComponent}, //tech news and home
  {path  : 'entertain', component : EntertainmentComponent},//tech news and home
  {path  : 'health', component : HealthComponent}, //tech news and home
  {path  : 'science', component : ScienceComponent}, //tech news and home
  {path  : 'sport', component : SportComponent} //tech news and home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
