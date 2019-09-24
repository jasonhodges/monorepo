import { Component } from '@angular/core';
import { EndpointService } from '@monorepo/api';
import { Player } from '@monorepo/data';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Component({
  selector: 'ill-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UniversityOfIllinois';
  env = environment;
  roster: Observable<Player[]>;

  constructor(private endpointService: EndpointService) {
    this.roster = endpointService.getRoster(this.env);
  }
}
