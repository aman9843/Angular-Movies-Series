import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
 
})
export class MovieItemComponent  {

  @Input() itemData : Movies | null = null;


}
