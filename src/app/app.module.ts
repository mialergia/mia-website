import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {CoreModule} from './core/core.module';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, CoreModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
