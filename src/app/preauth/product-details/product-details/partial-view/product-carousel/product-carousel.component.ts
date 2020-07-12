import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements OnInit, OnChanges {

  @Input('productSuggestion') productSuggestion;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log(this.productSuggestion);
  }

}
