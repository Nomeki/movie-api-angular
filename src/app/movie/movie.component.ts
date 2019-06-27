import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(public http: HttpClient, public router: Router) { }

  showMovies = new Array<Object>();
  baseUrl = 'https://api.themoviedb.org/3/';
  apiKey = '?api_key=d1d6acfe5803a3def7ebdad5f368f1ea';
  resObject = new Object();

  ngOnInit() {
    this.getPopularMovies().subscribe(res => {
      this.showMovies = res['results'];
      console.log(this.showMovies)
    })
  }

  goMovieDescription(event) {
    localStorage['movieId'] = event;
    this.router.navigate(['movie-description/']);
    console.log(event)
  }

  getMovie(filmeId) {
    return this.http.get(`${this.baseUrl}movie/${filmeId}${this.apiKey}&language=pt-BR`);
  }

  getPopularMovies(page = 1) {
    return this.http.get(`${this.baseUrl}movie/popular${this.apiKey}&page=${page}&language=pt-BR`);
  }

}
