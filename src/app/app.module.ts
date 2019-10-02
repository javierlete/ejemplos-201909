import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { HeroParentComponent } from './hero-parent.component';
import { HeroChildComponent } from './hero-child.component';
import { NameParentComponent } from './name-parent.component';
import { NameChildComponent } from './name-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VersionChildComponent } from './version-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
