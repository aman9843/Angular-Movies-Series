import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movies[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.genreMoviesById(genreId, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
  }

  getPagedMovies(page: number, searchKeyword?: string) {
    this.moviesService.searchMovies(page, searchKeyword).subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
  }

  genreMoviesById(genreId: string, page: number) {
    this.moviesService.getMoviesById(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.genreMoviesById(this.genreId, pageNumber);
    } else {
      if(this.searchValue) {
        this.getPagedMovies(pageNumber,this.searchValue);
      } else {
        this.getPagedMovies(pageNumber)
      }

    }
  }

  changeSearch() {

     console.log("button")

    if (this.searchValue) {
      this.getPagedMovies(1, this.searchValue);
    }

  }
}
