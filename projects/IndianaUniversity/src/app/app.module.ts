import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibHeaderConfig, LibHeaderModule } from 'lib-header';
import { LibPlayerCardModule } from 'lib-player-card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const libHeaderConfig: LibHeaderConfig = {
  conference: 'B1G',
  abbreviation: 'IND',
  title: 'Indiana University Football',
};

const libPlayerCardConfig = {
  school: 'Indiana',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LibHeaderModule.forRoot(libHeaderConfig),
    LibPlayerCardModule.forRoot(libPlayerCardConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
