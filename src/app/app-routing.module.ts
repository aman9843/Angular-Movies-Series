import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowsDetailsComponent } from './pages/tvshows-details/tvshows-details.component';
import { SeriesComponent } from './pages/series/series.component';

const routes : Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'movies',
    component:MoviesComponent
  },
  {
    path:'movieDetails/:id',
    component:MovieDetailsComponent
  },


  {
    path:'movies/genres/:genreId',
    component:MoviesComponent
  },




  {
    path:'series',
    component:SeriesComponent
  },
  {
    path:'tvDetails/:id',
    component:TvshowsDetailsComponent
  },
  {
    path:'series/genres/:genreId',
    component:SeriesComponent
  },
  {
    path:'genres',
    component:GenresComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({

   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]

})
export class AppRoutingModule { }
