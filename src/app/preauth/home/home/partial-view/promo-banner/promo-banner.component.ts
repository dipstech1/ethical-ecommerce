import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-promo-banner',
  templateUrl: './promo-banner.component.html',
  styleUrls: ['./promo-banner.component.css']
})
export class PromoBannerComponent implements OnInit, OnChanges {
  // tslint:disable-next-line: no-input-rename
  @Input('promoBanners') promoBanners;
  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  
  ngOnChanges(): void {
  }

  ngOnInit() {
  }

}
