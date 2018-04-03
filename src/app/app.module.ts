import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { TeamsService } from './data/teams.service';

// Note adjusted name
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { RosterComponent } from './roster/roster.component';
import { TeamWikiService } from './data/team-wiki.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentComponent,
    PageNotFoundComponent,
    TeamsComponent,
    PlayersComponent,
    TeamComponent,
    RosterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    // NOTE Difference
    HttpClientJsonpModule
  ],
  providers: [TeamsService,
              TeamWikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
