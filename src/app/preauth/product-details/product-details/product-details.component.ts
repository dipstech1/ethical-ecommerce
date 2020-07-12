import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/core/services/product-list.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productSuggestion = [];

  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private productService : ProductListService) { }

  ngOnInit() {

    this.productService.getProductSuggestion()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((res:any) => {
      this.productSuggestion = [...res];
    })
  }

}
