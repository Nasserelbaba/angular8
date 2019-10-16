import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherwidgetComponent } from './weatherwidget/weatherwidget.component';
import {WeatherdataService} from './weatherdata.service'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    WeatherwidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
