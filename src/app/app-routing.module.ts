import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengersComponent } from './challengers/challengers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChallengerDetailComponent } from './challenger-detail/challenger-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/challengers', pathMatch: 'full' },
  { path: 'challengers', component: ChallengersComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'trainercard/:id', component: ChallengerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
