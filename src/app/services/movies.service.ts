import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies, MoviesDto } from '../models/movies';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TvDto } from '../models/tv';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  api: string = '8450c711c1c32fe536131fb801b56232';

  constructor(private http: HttpClient) {}

  getMovies(type: string = '', count: number = 12) {
    return this.http
      .get<MoviesDto>(`${this.baseUrl}/movie/${type}?api_key=${this.api}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getTvs(type: string = '', count: number = 12) {
    return this.http
      .get<TvDto>(`${this.baseUrl}/tv/${type}?api_key=${this.api}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  searchMovies(page: number) {
    return this.http
      .get<MoviesDto>(
        `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.api}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  moviesDetails(id: string) {
    return this.http
      .get<Movies>(`${this.baseUrl}/movie/${id}?api_key=${this.api}`)


  }
}
