import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MyMoviesComponent } from './movies/my-movies/my-movies.component';
import { ReviewsComponent } from './movies/reviews/reviews.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'movies', component: MoviesComponent, children:[
    { path: 'my-movies', component: MyMoviesComponent },
    { path: 'reviews', component: ReviewsComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
