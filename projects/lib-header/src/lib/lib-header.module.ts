import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LibHeaderComponent } from './lib-header.component';
import { LibHeaderService, LibHeaderServiceToken } from './lib-header.service';

@NgModule({
  declarations: [LibHeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  exports: [
    LibHeaderComponent,
    MatToolbarModule
  ]
})
export class LibHeaderModule {
  static forRoot(config): ModuleWithProviders {
    return {
      ngModule: LibHeaderModule,
      providers: [
        LibHeaderService,
        {
          provide: LibHeaderServiceToken,
          useValue: config
        }
      ]
    };
  }
}
