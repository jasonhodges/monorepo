import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EndpointService } from '@monorepo/api';
import { UiModule } from '@monorepo/ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [EndpointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
