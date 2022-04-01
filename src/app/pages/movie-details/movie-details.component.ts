import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movies : Movies | null = null;

  constructor(private route: ActivatedRoute, private moviesService :MoviesService) { }

  ngOnInit(): void {

    this.route.params.subscribe(({id}) => {
          this.moviesDetails(id)
    })
  }

  moviesDetails(id: string) {
    this.moviesService.moviesDetails(id).subscribe((movieData) => {
         this.movies = movieData;
         console.log(this.movies)
    })



}}