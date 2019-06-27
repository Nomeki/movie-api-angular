import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieComponent } from '../movie.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  movieId = localStorage['movieId'];
  baseUrl = 'https://api.themoviedb.org/3/';
  apiKey = '?api_key=d1d6acfe5803a3def7ebdad5f368f1ea';
  movie = new Object();

  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit() {
    this.getMovie(this.movieId).subscribe(res => {
      this.movie = res;
      console.log(this.movie);
    })
  }

  getMovie(filmeId) {
    return this.http.get(`${this.baseUrl}movie/${filmeId}${this.apiKey}&language=pt-BR`);
  }

}
