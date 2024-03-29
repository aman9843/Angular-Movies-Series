import { Component, OnInit } from '@angular/core';
import { Genre} from 'src/app/models/genres';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {


  genres: Genre[] = [];

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {

    this.moviesService.moviesGenres().subscribe((genresData) =>{
      this.genres = genresData;
    })
  }

}
