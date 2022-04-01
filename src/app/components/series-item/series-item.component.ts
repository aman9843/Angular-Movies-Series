import { Component, OnInit } from '@angular/core';
import { Tv } from '../../models/tv';
import { Input } from '@angular/core';

@Component({
  selector: 'app-series-item',
  templateUrl: './series-item.component.html',
  styleUrls: ['./series-item.component.css']
})
export class SeriesItemComponent {

  @Input() itemDatas : Tv | null = null;


}
