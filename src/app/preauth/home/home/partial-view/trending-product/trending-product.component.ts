import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-trending-product',
  templateUrl: './trending-product.component.html',
  styleUrls: ['./trending-product.component.css']
})
export class TrendingProductComponent implements OnInit, OnChanges {
  

  @Input('trendingProduct') trendingProduct;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
  }

}
