import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Tv } from 'src/app/models/tv';
import { trigger,style,state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css'],
  animations: [
    trigger('slideFade',[
      state('void', style({opacity:0})),
      transition('void <=> *', [animate('1s')])


    ])
  ]
})
export class SlidersComponent implements OnInit {
  @Input() item: Tv[] = [];
  @Input() isBanner: boolean = false
  currentSlideIndex : number = 0;



  ngOnInit(): void {

    if(!this.isBanner) {
      setInterval(() =>{
        this.currentSlideIndex == ++this.currentSlideIndex % this.item.length;

      },5000)

    }


  }

}


