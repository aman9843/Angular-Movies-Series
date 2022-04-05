import { Component, OnInit } from '@angular/core';
import { Tv } from 'src/app/models/tv';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Tv[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;
  topratedseries: Tv[] = [];

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.moviesService.getTvs('popular').subscribe((tvShows) => {
      this.topratedseries = tvShows;
      console.log(this.topratedseries)
    })

    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.genreSeriesById(genreId, 1);
      } else {
        this.getPagedseries(1);
      }
    });
  }



  getPagedseries(page: number, searchKeyword?: string) {
    this.moviesService.searchSeries(page, searchKeyword).subscribe((seriesData) => {
      this.series = seriesData;
      console.log(seriesData);
    });
  }

  genreSeriesById(genreId: string, page: number) {
    this.moviesService.getSeriesById(genreId, page).subscribe((seriesData) => {
      this.series = seriesData;
    });
  }





  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.genreSeriesById(this.genreId, pageNumber);
    } else {
      if(this.searchValue) {
        this.getPagedseries(pageNumber,this.searchValue);
      } else {
        this.getPagedseries(pageNumber)
      }

    }
  }

  changeSearch() {

     console.log("button")

    if (this.searchValue) {
      this.getPagedseries(1, this.searchValue);
    }

  }



}
