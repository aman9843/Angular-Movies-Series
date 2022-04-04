import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { AppRoutingModule } from './app-routing.module';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { SeriesItemComponent } from './components/series-item/series-item.component'
import {PaginatorModule} from 'primeng/paginator';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvshowsComponent,
    GenresComponent,
    SliderComponent,
    ItemsBannerComponent,
    MovieItemComponent,
    SeriesItemComponent,
    MovieDetailsComponent,
 
  ],
  imports: [BrowserModule,BrowserAnimationsModule,
    AppRoutingModule, HttpClientModule,PaginatorModule,TabViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
