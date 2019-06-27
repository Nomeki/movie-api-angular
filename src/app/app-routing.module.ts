import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDescriptionComponent } from './movie/movie-description/movie-description.component';

const routes: Routes = [
  { path: 'movie', component: MovieComponent },
  { path: 'movie-description', component: MovieDescriptionComponent },
  { path: '', redirectTo: '/movie', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
