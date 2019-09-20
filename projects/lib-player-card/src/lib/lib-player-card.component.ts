import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { LibPlayerCardService } from './lib-player-card.service';

@Component({
  selector: 'lib-player-card',
  templateUrl: 'lib-player-card.component.html',
  styleUrls: ['lib-player-card.component.scss']
})
export class LibPlayerCardComponent implements OnInit {
  @Input() env;
  public roster: Player[];

  constructor(private libPlayerCardService: LibPlayerCardService) {
  }

  ngOnInit() {
    this.libPlayerCardService.getRoster(this.env).subscribe((data: Player[]) => {
      this.roster = data;
    });
  }

}
