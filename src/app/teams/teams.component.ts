import { Component, OnInit, OnDestroy } from '@angular/core';


import { TeamsService } from '../data/teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any[];
  filteredTeams: any[];
  getTeamsSub: any;
  loadError: boolean;
  namesDir: String = 'asc';
  venueDir: String = 'asc';
  locationDir: String = 'asc';
  confDir: String = 'asc';
  divDir: String = 'asc';
  abbDir: String = 'asc';
  actDir: String = 'asc';
  colState: ['asc', 'asc', 'asc', 'asc', 'asc', 'asc', 'asc', 'asc' ];

  constructor(private teamService: TeamsService, private router: Router) { }
   // get Teams data from service assign to teams array.  Set load parameter
  ngOnInit() {
    this.getTeamsSub = this.teamService.getTeams().subscribe(data => {
      // console.log(data);
      this.teams = data.teams;
      this.filteredTeams = data.teams;
      // console.log(this.teams);

      this.filteredTeams.sort(function(a, b) {
        return + a.name.localeCompare(b.name);
      });

      this.loadError = false;
    }, function(){
      this.loadError = true;
    });
  }

  routeTeam(id: string) {
    this.router.navigate(['/team/' + id]);
  }

  onTeamSearchKeyUp(event: any) {
    // console.log(event);
    const val = event.target.value.toLowerCase();
    // console.log(val);
    this.filteredTeams = this.teams.filter((team) => {
      if (team.name.toLowerCase().includes(val) ||
        team.venue.name.toLowerCase().includes(val) ||
        team.locationName.toLowerCase().includes(val) ||
        team.conference.name.toLowerCase().includes(val) ||
        team.division.name.toLowerCase().includes(val) ||
        team.shortName.toLowerCase().includes(val) ) {
          return true;
        }
      });
  }
  // #sortSwitch
  // large switch statement
  sortBy(n) {
    // a b serve as filteredTeams

    switch (n) {
      case 0:
      if (this.namesDir === 'asc') {
        this.filteredTeams.sort(function(a, b) {
          return - a.name.localeCompare(b.name);
        });
        this.namesDir = 'desc';
      }else {
        this.filteredTeams.sort(function(a, b) {
          return + a.name.localeCompare(b.name);
        });
        this.namesDir = 'asc';
      }
        break;
      case 1:
      if (this.venueDir === 'asc') {
        this.filteredTeams.sort(function(a, b) {
          return - a.venue.name.localeCompare(b.venue.name);
        });
        this.venueDir = 'desc';
      }else {
        this.filteredTeams.sort(function(a, b) {
          return + a.venue.name.localeCompare(b.venue.name);
        });
        this.venueDir = 'asc';
      }
        break;
      case 2:
      if (this.locationDir === 'asc') {
        this.filteredTeams.sort(function(a, b) {
          return - a.venue.city.localeCompare(b.venue.city);
        });
        this.locationDir = 'desc';
      }else {
        this.filteredTeams.sort(function(a, b) {
          return + a.venue.city.localeCompare(b.venue.city);
        });
        this.locationDir = 'asc';
      }
        break;
      case 3:
      if (this.confDir === 'asc') {
        this.filteredTeams.sort(function(a, b) {
          return - a.conference.name.localeCompare(b.conference.name);
        });
        this.confDir = 'desc';
      }else {
        this.filteredTeams.sort(function(a, b) {
          return + a.conference.name.localeCompare(b.conference.name);
        });
        this.confDir = 'asc';
      }
        break;
      case 4:
      if (this.divDir === 'asc') {
        this.filteredTeams.sort(function(a, b) {
          return - a.division.name.localeCompare(b.division.name);
        });
        this.divDir = 'desc';
      }else {
        this.filteredTeams.sort(function(a, b) {
          return + a.division.name.localeCompare(b.division.name);
        });
        this.divDir = 'asc';
      }
        break;
      case 5:
      if (this.abbDir === 'asc') {
        this.filteredTeams.sort(function(a, b) {
          return - a.abbreviation.localeCompare(b.abbreviation);
        });
        this.abbDir = 'desc';
      }else {
        this.filteredTeams.sort(function(a, b) {
          return + a.abbreviation.localeCompare(b.abbreviation);
        });
        this.abbDir = 'asc';
      }
        break;
      case 6:
      if (this.actDir === 'asc') {
        this.filteredTeams.sort(function(a, b) {
          return - a.firstYearOfPlay.localeCompare(b.firstYearOfPlay);
        });
        this.actDir = 'desc';
      }else {
        this.filteredTeams.sort(function(a, b) {
          return + a.firstYearOfPlay.localeCompare(b.firstYearOfPlay);
        });
        this.actDir = 'asc';
      }
        break;
      default:
        console.log('Error in sort switch');
    }
    // #endsortSwitch
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    if (this.getTeamsSub) {
      this.getTeamsSub.unsubscribe();
    }
  }

}

