import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokeWidgetComponent } from './joke-widget/joke-widget.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeNewComponent } from './joke-new/joke-new.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    JokeWidgetComponent,
    MainNavComponent,
    HomeComponent,
    JokeListComponent,
    JokeNewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
