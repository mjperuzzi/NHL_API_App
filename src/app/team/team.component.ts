import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamWikiService } from '../data/team-wiki.service';
import { TeamsService } from '../data/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  paramsSubscription: any;
  teamSubscription: any;
  team: any ;
  successMessage = false;
  wikiSubscription: any;
  teamWiki: any;

  constructor(private teamsService: TeamsService, private route: ActivatedRoute, private wikiService: TeamWikiService) {}

  ngOnInit() {
    // get paramater in route then subscribe to data.  subscribe teamSub to the teamService getTeam() function. Provide id param.
    // Assign team to only element in the teams array provided from source.
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.teamSubscription = this.teamsService.getTeam(params['id']).subscribe((data) => {
        this.team = data.teams[0];
        this.wikiSubscription = this.wikiService.getTeamWiki(this.team.name).subscribe((wiki) => {
          this.teamWiki = wiki;
        });
      });
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
    if (this.teamSubscription) {
      this.teamSubscription.unsubscribe();
    }
  }

}
