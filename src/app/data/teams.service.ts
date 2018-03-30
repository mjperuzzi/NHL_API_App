import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Teams } from './teams';

@Injectable()
export class TeamsService {

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Teams[]> {
    return this.http.get<Teams[]>('https://statsapi.web.nhl.com/api/v1/teams');
  }

  getTeam(id): Observable<Teams[]> {
    return this.http.get<Teams[]>('https://statsapi.web.nhl.com/api/v1/teams/' + id);
  }

}
