import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.css']
})
export class BannerSliderComponent implements OnInit {

  slider = [
    {
      imgSrc : "../../../../../../assets/img/home/hero-slider/05.jpg",
      t1: "Check our all",
      t2: "Smartphones",
      t3:" Accessories collection"
    },
    {
      imgSrc : "../../../../../../assets/img/home/hero-slider/04.jpg",
      t1: "View the",
      t2: "Gadgets",
      t3:" Gadgets collection"
    },
    {
      imgSrc : "../../../../../../assets/img/home/hero-slider/06.jpg",
      t1: "Jump into",
      t2: "World",
      t3:" Accessories collection"
    }
  ]

  constructor(config: NgbCarouselConfig) {  
    
  }  

  ngOnInit() {
  }

}
