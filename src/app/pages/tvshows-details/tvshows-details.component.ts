import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { SeriesImages,SeriesCredits,SeriesVideo, Tv } from 'src/app/models/tv';

@Component({
  selector: 'app-tvshows-details',
  templateUrl: './tvshows-details.component.html',
  styleUrls: ['./tvshows-details.component.css']
})
export class TvshowsDetailsComponent implements OnInit {
  series: Tv | null = null;
  seriesVideos: SeriesVideo[] = [];
  seriesImages: SeriesImages | null = null;
  seriesCredits: SeriesCredits | null = null;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getSeriesDetails(id);
      this.getSeriesVideos(id);
      this.getSeriesImages(id);
      this.getSeriesCredits(id);
    });
  }

  ngOnDestroy(): void {


  }

  getSeriesDetails(id: string) {
    this.moviesService.seriesDetails(id).subscribe((seriesData) => {
      this.series = seriesData;
      console.log(this.series);
    });
  }

  getSeriesCredits(id: string) {
    this.moviesService.seriesCredits(id).subscribe((seriesCreditsData) => {
      this.seriesCredits = seriesCreditsData;
      console.log(this.seriesCredits);
    });
  }

  getSeriesImages(id: string) {
    this.moviesService.seriesImages(id).subscribe((seriesImagesData) => {
      this.seriesImages = seriesImagesData;
      console.log(this.seriesImages);
    });
  }

  getSeriesVideos(id: string) {
    this.moviesService.seriesDetailsVideos(id).subscribe((seriesVideosData) => {
      this.seriesVideos = seriesVideosData;
      console.log(this.seriesVideos);
    });
  }
}
