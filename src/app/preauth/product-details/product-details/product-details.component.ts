import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/core/services/product-list.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/core/services/data-sharing.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productSuggestion = [];
  comboSuggestion = [];

  specDetails : any;
  productReviews : any;

  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private productService : ProductListService, private dataService : DataService) { }

  ngOnInit() {

    this.productService.getProductSuggestion()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((res:any) => {
      this.productSuggestion = [...res];
    })

    this.productService.getTechSpecs(2)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((res:any) => {
      this.specDetails = {...res};

      this.dataService.sendProductData(this.specDetails);
    })

    this.productService.getComboProductSuggestion()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((res:any) => {
      this.comboSuggestion = [...res];
    });

    this.productService.getReviews(2)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((res:any) => {
      this.productReviews = res.productReviews;
    })

  }

}
