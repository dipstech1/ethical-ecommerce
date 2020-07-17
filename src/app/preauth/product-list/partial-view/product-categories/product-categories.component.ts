import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductListService } from 'src/app/core/services/product-list.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit, OnChanges {
 

  @Input('category') category;
  categories = [];

  constructor() { }

  ngOnChanges(): void {
    console.log("this.adasdasdas " , this.category)
  }

  ngOnInit() {
    
  }

  getDivId(categorName){
    return `#${categorName}`;
  }

}
