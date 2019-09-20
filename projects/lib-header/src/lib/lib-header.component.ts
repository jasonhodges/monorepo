import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team.model';
import { LibHeaderConfig } from './lib-header.config';
import { LibHeaderService } from './lib-header.service';

@Component({
  selector: 'lib-header',
  templateUrl: 'lib-header.component.html',
  styleUrls: ['lib-header.component.scss']
})
export class LibHeaderComponent implements OnInit {
  @Input() env;
  public config: Observable<LibHeaderConfig>;
  public team: Observable<Team>;

  constructor(private libHeaderService: LibHeaderService) {
  }

  ngOnInit() {
    this.config = this.libHeaderService.getConfig();
    this.team = this.libHeaderService.getTeams(this.env);
  }

}
