import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibHeaderConfig, LibHeaderModule } from 'lib-header';
import { LibPlayerCardModule } from 'lib-player-card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const libHeaderConfig: LibHeaderConfig = {
  conference: 'B1G',
  abbreviation: 'MSU',
  title: 'Michigan State University Football'
};

const libPlayerCardConfig = {
  school: 'Michigan State'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibHeaderModule.forRoot(libHeaderConfig),
    LibPlayerCardModule.forRoot(libPlayerCardConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
