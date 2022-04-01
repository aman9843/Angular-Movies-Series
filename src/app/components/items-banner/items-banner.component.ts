import { Component, Input } from '@angular/core';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.css']
})
export class ItemsBannerComponent  {

  @Input() items: Movies[] = [];
  @Input() title: String =""
  @Input() seriesItems: Movies[] = [];
  @Input() name: String =""








}
