import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibHeaderConfig, LibHeaderModule } from 'lib-header';
import { LibPlayerCardModule } from 'lib-player-card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const libHeaderConfig: LibHeaderConfig = {
  conference: 'B1G',
  abbreviation: 'MICH',
  title: 'University Of Michigan Football'
};

const libPlayerCardConfig = {
  school: 'Michigan'
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LibHeaderModule.forRoot(libHeaderConfig),
    LibPlayerCardModule.forRoot(libPlayerCardConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
