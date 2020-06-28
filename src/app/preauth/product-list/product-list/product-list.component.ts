import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductListService } from 'src/app/core/services/product-list.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
 

  productList = [];
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  
  constructor(private productListService : ProductListService) { }

  ngOnInit() {
    this.productListService.getProductLists()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res:any) => {
        this.productList = [...res];
        console.log("Product List ", this.productList);
      })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

}
