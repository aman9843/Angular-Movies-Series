export interface Movies {
  adult: boolean;
  original_name:String;
  name:string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue:number;
  runtime:number;
  status:string;
  genres:Genres[];
}


export interface MoviesDto {
  page:number,
  results:Movies[],
  total_results:number,
  total_pages:number
}


export interface Genres {
  id:number,
  name:string
}


export interface MoviesVideosDto {
  id:number,
  results:MoviesVideo[];
}


export interface MoviesVideo {
  site:string,
  key:string
}



