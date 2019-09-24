import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LibPlayerCardConfig } from './lib-player-card.config';

enum apiConfig {
  endpoint = 'https://api.collegefootballdata.com/',
  dev_endpoint = 'api/',
  conference = 'B1G',
  teamsApi = 'teams',
  rosterApi = 'roster'
}

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LibPlayerCardService {

  constructor(
    @Inject(LibPlayerCardServiceToken) private config: LibPlayerCardConfig,
    private httpClient: HttpClient
  ) {
  }

  getRoster(env): Observable<any> {
    const config = this.config;
    const url = env.production ? apiConfig.endpoint : apiConfig.dev_endpoint;
    const options = {
      params: new HttpParams().set('team', config.school),
      headers: httpOptions.headers
    };
    return this.httpClient.get(url + apiConfig.rosterApi, {
      headers: options.headers,
      params: options.params,
      observe: 'response'
    }).pipe(
      map(data => {
        console.log('player data', data.body);
        return data.body;
      })
    );
  }
}

export const LibPlayerCardServiceToken = new InjectionToken<LibPlayerCardConfig>('LibPlayerCardConfig');
