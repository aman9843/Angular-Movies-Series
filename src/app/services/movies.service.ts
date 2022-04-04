import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies, MoviesDto, MoviesImages } from '../models/movies';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TvDto } from '../models/tv';
import { MoviesVideosDto } from '../models/movies';
import { MoviesCredits } from '../models/movies';
import { GenresDto } from '../models/genres';
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

  moviesCredits(id: string) {
    return this.http
      .get<MoviesCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.api}`)


  }


  moviesDetailsVideos(id: string) {
    return this.http
      .get<MoviesVideosDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.api}`)
      .pipe(
        switchMap((res) => {
          return of(res.results)
        })


      );
    }


    moviesGenres() {
      return this.http
        .get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.api}`)
        .pipe(
          switchMap((res) => {
            return of(res.genres)
          })


        );
      }


    moviesGenresById(genreId:string) {
      return this.http
        .get<MoviesDto>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&api_key=${this.api}`)
        .pipe(
          switchMap((res) => {
            return of(res.results)
          })


        );

    }

    moviesImages(id: string) {
      return this.http
        .get<MoviesImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.api}`)


    }
  }
