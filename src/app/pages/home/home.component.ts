import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/models/movies';
import { Tv } from '../../models/tv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularmovies: Movies[] = [];
  upcomingmovies: Movies[] = [];
  topratedmovies: Movies[] = [];
  nowplayingmovies: Movies[] = [];
  topratedseries: Tv[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularmovies = movies;
      console.log(this.popularmovies);
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingmovies = movies;
      console.log(this.upcomingmovies);
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topratedmovies = movies;
      console.log(this.topratedmovies);
    });
    this.moviesService.getMovies('now_playing').subscribe((movies) => {
      this.nowplayingmovies = movies;
      console.log(this.nowplayingmovies);
    });
    this.moviesService.getTvs('popular').subscribe((tvShows) => {
      this.topratedseries = tvShows;
      console.log(this.topratedseries)
    })
  }
}
