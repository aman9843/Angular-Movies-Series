import { Movies } from "./movies";
export interface Tv extends Movies {}


export interface TvDto {
  page: number;
  results: Tv[];
  total_results: number;
  total_pages: number;

}
