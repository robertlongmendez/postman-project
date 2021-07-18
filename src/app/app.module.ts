import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoviesComponent } from './movies/movies.component';
import { MyMoviesComponent } from './movies/my-movies/my-movies.component';
import { AuthComponent } from './auth/auth.component';
import { ReviewsComponent } from './movies/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MyMoviesComponent,
    AuthComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
