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
  originalCategory = [];

  constructor() { }

  ngOnChanges(): void {
    this.categories = [...this.category.categoryList];
    this.originalCategory = [...this.categories];
  }

  ngOnInit() {
    
  }

  getDivId(categorName){
    return `${categorName}`;
  }

  searchProduct(searchTerm : string){
    searchTerm = searchTerm.toLowerCase();
    this.categories = this.originalCategory.filter(c => c.cname.toLowerCase().includes(searchTerm));
  }

}
