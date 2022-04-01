import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from "../../models/movies";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movies: Movies[] = []

  constructor(private moviesService :MoviesService) { }

  ngOnInit(): void {

    this.getPagedMovies(1);


  }

  getPagedMovies(page:number) {
    this.moviesService.searchMovies(page).subscribe(movies => {
      this.movies = movies
      console.log(movies)
    })
  }

  paginate(event: any) {
    this.getPagedMovies(event.page+1)
  }

}
