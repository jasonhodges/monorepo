import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Team } from '../team.model';
import { LibHeaderConfig } from './lib-header.config';

enum apiConfig {
  endpoint = 'https://api.collegefootballdata.com/',
  dev_endpoint = 'api/',
  conference = 'B1G',
  teamsApi = 'teams'
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LibHeaderService {

  constructor(
    @Inject(LibHeaderServiceToken) private config: LibHeaderConfig,
    private httpClient: HttpClient
  ) {
  }

  getConfig(): Observable<LibHeaderConfig> {
    return of(this.config);
  }

  getTeams(env) {
    const config = this.config;
    const url = env.production ? apiConfig.endpoint : apiConfig.dev_endpoint;
    const options = {
      params: new HttpParams().set('conference', apiConfig.conference),
      headers: httpOptions.headers,
    };
    return this.httpClient.get(url + apiConfig.teamsApi, {
      headers: options.headers,
      params: options.params,
      responseType: 'json',
      observe: 'response'
    }).pipe(
      map(data => data.body),
      map((list: Team[]) => {
        return list.find(team => {
          return team.abbreviation === config.abbreviation;
        });
      })
    );
  }
}

export const LibHeaderServiceToken = new InjectionToken<LibHeaderConfig>('LibHeaderConfig');
