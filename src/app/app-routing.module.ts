/*Contains all routes for app*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: 'players', component: PlayersComponent },  
  { path: '', redirectTo: 'teams', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
