import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRouteModule } from './app.routing';

import { AppComponent } from './app.component';
import { NapComponent } from './nap/nap.component';
import { SleepComponent } from './sleep/sleep.component';
import { FeedComponent } from './feed/feed.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NapComponent,
    SleepComponent,
    FeedComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    appRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
