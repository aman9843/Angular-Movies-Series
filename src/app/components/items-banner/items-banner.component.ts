import { Component, Input } from '@angular/core';
import { Tv } from 'src/app/models/tv';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.css']
})
export class ItemsBannerComponent  {

  @Input() items: Movies[] = [];
  @Input() title: String =""
  @Input() seriesItems: Tv[] = [];
  @Input() name: String =""








}
