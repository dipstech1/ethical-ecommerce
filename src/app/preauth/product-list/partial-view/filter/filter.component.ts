import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input('brands') brands;

  @Output() showBrand:any = new EventEmitter();

  selectedBrandsData = [];

  constructor() { }

  ngOnInit() {
  }

  selectedBrands(e:any){
    this.selectedBrandsData.push(e.target.id);
    this.showBrand.emit(this.selectedBrandsData)
  }

}
