import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies, MoviesCredits, MoviesVideo } from 'src/app/models/movies';
import { MoviesService } from '../../services/movies.service';
import { MoviesImages } from 'src/app/models/movies';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movies: Movies | null = null;
  moviesVideos: MoviesVideo[] = [];
  moviesImages: MoviesImages | null = null;
  moviesCredits: MoviesCredits | null = null;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.moviesDetails(id);
      this.getmoviesVideos(id);
      this.getMoviesImages(id);
      this.getMoviesCredits(id);
    });
  }

  ngOnDestroy(): void {
   

  }

  moviesDetails(id: string) {
    this.moviesService.moviesDetails(id).subscribe((movieData) => {
      this.movies = movieData;
      console.log(this.movies);
    });
  }

  getMoviesCredits(id: string) {
    this.moviesService.moviesCredits(id).subscribe((movieCreditsData) => {
      this.moviesCredits = movieCreditsData;
      console.log(this.moviesCredits);
    });
  }

  getMoviesImages(id: string) {
    this.moviesService.moviesImages(id).subscribe((movieImagesData) => {
      this.moviesImages = movieImagesData;
      console.log(this.moviesImages);
    });
  }

  getmoviesVideos(id: string) {
    this.moviesService.moviesDetailsVideos(id).subscribe((moviesVideosData) => {
      this.moviesVideos = moviesVideosData;
      console.log(this.moviesVideos);
    });
  }
}
