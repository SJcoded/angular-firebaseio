import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BiggerDirective } from './bigger.directive';
import { ColourPipe } from './colour.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BiggerDirective,
    ColourPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
