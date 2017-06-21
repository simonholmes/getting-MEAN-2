import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeListComponent } from './home-list/home-list.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { DistancePipe } from './distance.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    RatingStarsComponent,
    DistancePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
