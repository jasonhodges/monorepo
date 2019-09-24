import { Component, Input, OnInit } from '@angular/core';
import { Player } from '@monorepo/data';

@Component({
  selector: 'monorepo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() roster: Player[];
  constructor() { }

  ngOnInit() {
  }

}
