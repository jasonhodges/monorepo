import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibHeaderConfig, LibHeaderModule } from 'lib-header';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const libHeaderConfig: LibHeaderConfig = {
  conference: 'B1G',
  abbreviation: 'MSU',
  title: 'Michigan State University Football'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibHeaderModule.forRoot(libHeaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
