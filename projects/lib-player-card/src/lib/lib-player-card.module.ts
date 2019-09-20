import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { LibPlayerCardComponent } from './lib-player-card.component';
import { LibPlayerCardService, LibPlayerCardServiceToken } from './lib-player-card.service';

@NgModule({
  declarations: [LibPlayerCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatCardModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    LibPlayerCardComponent,
    MatCardModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class LibPlayerCardModule {
  static forRoot(config): ModuleWithProviders {
    return {
      ngModule: LibPlayerCardModule,
      providers: [
        LibPlayerCardService,
        {
          provide: LibPlayerCardServiceToken,
          useValue: config
        }
      ]
    };
  }
}
