import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-product-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  minValue: number = 50;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 400
  };

  @Input('brands') brands;
  @Input('categories') categories

  @Output() showBrand:any = new EventEmitter();
  @Output() showRating = new EventEmitter();
  @Output() showPriceRange = new EventEmitter();


  ratingList = [5,4,3,2,1]

  selectedBrandsData = [];
  selectedRatingData = [];

  constructor() { }

  ngOnInit() {
  }

  selectedBrands(e:any){
    const {checked} = e.target;
    if(checked){
      this.selectedBrandsData.push(e.target.id);
    }    
    else{
      const index = this.selectedBrandsData.findIndex(x => x == (e.target.id));
      if(index > -1){
        this.selectedBrandsData.splice(index,1);
      }
    }
    this.showBrand.emit(this.selectedBrandsData)
  }

  selectedRating(e:any){
    let rating = e.target.id.split("-")[1];
    const {checked} = e.target;
    if(checked){
      this.selectedRatingData.push(rating);
    }    
    else{
      const index = this.selectedRatingData.findIndex(x => x == (rating));
      if(index > -1){
        this.selectedRatingData.splice(index,1);
      }
    }
    this.showRating.emit(this.selectedRatingData)

  }

  priceChange(e = {}){
    let price = {
      minPrice : this.minValue,
      maxPrice : this.maxValue
    }
    this.showPriceRange.emit(price);
  }

}
