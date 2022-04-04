import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from "../../models/movies";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  movies: Movies[] = []
  genreId : String|null = null;

  constructor(private moviesService :MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.pipe(take(1)).subscribe(({genreId}) => {
      if(genreId) {
        this.genreMoviesById(genreId)
      } else {
        this.getPagedMovies(1);
      }
    })




  }


  genreMoviesById(genreId:string){

    this.moviesService.moviesGenresById(genreId).subscribe(movies => {
      this.movies = movies
    })
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
