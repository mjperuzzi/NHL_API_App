import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';

@Injectable()
export class TeamWikiService {

  urlRoute: String = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=';
  constructor(private http: HttpClient) { }

  getTeamWiki(name): Observable<any> {
    const callback = '?callback=JSON_CALLBACK';
    return this.http.get<any>(this.urlRoute + name + callback);
  }
}
