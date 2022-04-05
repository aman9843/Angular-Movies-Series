import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies, MoviesDto, MoviesImages } from '../models/movies';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SeriesVideosDto, Tv, TvDto } from '../models/tv';
import { MoviesVideosDto } from '../models/movies';
import { MoviesCredits } from '../models/movies';
import { GenresDto } from '../models/genres';
import { SeriesCredits,SeriesImages } from '../models/tv';
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

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular' ;
    return this.http
      .get<MoviesDto>(
        `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.api}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);

        })
      );
  }


  searchSeries(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular' ;
    return this.http
      .get<MoviesDto>(
        `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.api}`
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

  seriesDetails(id:string) {
    return this.http
      .get<Tv>(`${this.baseUrl}/tv/${id}?api_key=${this.api}`)
  }

  moviesCredits(id: string) {
    return this.http
      .get<MoviesCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.api}`)


  }


  seriesCredits(id: string) {
    return this.http
      .get<SeriesCredits>(`${this.baseUrl}/tv/${id}/credits?api_key=${this.api}`)


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


    seriesDetailsVideos(id: string) {
      return this.http
        .get<SeriesVideosDto>(`${this.baseUrl}/tv/${id}/videos?api_key=${this.api}`)
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

      seriesGenres() {
        return this.http
          .get<GenresDto>(`${this.baseUrl}/genre/tv/list?api_key=${this.api}`)
          .pipe(
            switchMap((res) => {
              return of(res.genres)
            })


          );
        }


      getMoviesById(genreId:string,pageNumber:number) {
      return this.http
        .get<MoviesDto>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.api}`)
        .pipe(
          switchMap((res) => {
            return of(res.results)
          })


        );

    }

    getSeriesById(genreId:string,pageNumber:number) {
      return this.http
        .get<TvDto>(`${this.baseUrl}/discover/tv?with_genres=${genreId}&page=${pageNumber}&api_key=${this.api}`)
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

    seriesImages(id: string) {
      return this.http
        .get<SeriesImages>(`${this.baseUrl}/tv/${id}/images?api_key=${this.api}`)


    }
  }
