import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-bundle',
  templateUrl: './product-bundle.component.html',
  styleUrls: ['./product-bundle.component.css']
})
export class ProductBundleComponent implements OnInit, OnChanges {
  ngOnChanges(): void {
    console.log(this.comboSuggestion)
  }

  @Input('comboSuggestion') comboSuggestion;

  constructor() { }

  ngOnInit() {
  }

}
