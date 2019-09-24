import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GridComponent } from './grid/grid.component';
import { PlayerCardComponent } from './player-card/player-card.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [GridComponent, PlayerCardComponent],
  exports: [GridComponent, PlayerCardComponent],
})
export class UiModule {}
