import { trigger,style,state, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('slideFade',[
      state('void', style({opacity:0})),
      transition('void <=> *', [animate('1s')])


    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movies[] = [];
  @Input() isBanner: boolean = false
  currentSlideIndex : number = 0;



  ngOnInit(): void {

    if(!this.isBanner) {
      setInterval(() =>{
        this.currentSlideIndex == ++this.currentSlideIndex % this.items.length;

      },5000)

    }


  }

}
