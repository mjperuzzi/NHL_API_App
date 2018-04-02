import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TeamsService {

  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    return this.http.get<any>('https://statsapi.web.nhl.com/api/v1/teams');
  }

  getTeam(id): Observable<any> {
    return this.http.get<any>('https://statsapi.web.nhl.com/api/v1/teams/' + id);
  }

}
