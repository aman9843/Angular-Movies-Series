import { Movies } from "./movies";
export interface Tv extends Movies {}


export interface TvDto {
  page: number;
  results: Tv[];
  total_results: number;
  total_pages: number;

}


export interface Genres {
  id:number,
  name:string
}


export interface SeriesVideosDto {
  id:number,
  results:SeriesVideo[];
}


export interface SeriesVideo {
  site:string,
  key:string
}



export interface SeriesImages {

  backdrops: {
    file_path:string;
  }[]

}


export interface SeriesCredits {
  cast:{
    name:string,
    profile_path: string
  }[]
}

