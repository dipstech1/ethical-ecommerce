import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductListService } from 'src/app/core/services/product-list.service';
import { Subject } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {


  productList = [];
  brands = [];

  sortByFilter = [
    {
      sortId: 1,
      sortName: "Popularity"
    },
    {
      sortId: 2,
      sortName: "Low - Hight Price"
    },
    {
      sortId: 3,
      sortName: "High - Low Price"
    },
    {
      sortId: 4,
      sortName: "Average Rating"
    },
    {
      sortId: 5,
      sortName: "A - Z Order"
    },
    {
      sortId: 6,
      sortName: "Z - A Order"
    }
  ]
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  productListResponse: any[];

  page = 1;
  itemsPerPage = 5;
  pageSize: number = 5;
  categories: any[];

  constructor(private productListService: ProductListService, 
    private router: Router,private route: ActivatedRoute, private cartService : CartService) {
    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(param =>{
        console.log("param ", param);
      })
      
   }

  ngOnInit() {
    this.getProductsData();
  }

  getProductsData() {
    this.productListService.getProductLists()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.productList = [...res.productList];
        this.productListResponse = [...res];
      });

    this.productListService.getBrands()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.brands = [...res.brands];
        this.brands = this.brands.map((b: any) => {
          return { ...b, isChecked: false }
        })
      });

      this.productListService.getProductCategories()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.categories = [...res.productCategories];        
      });

  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  /**
   * @param sortId
   * Sort product list based on selected sort  
  */
  sortItem(sortId: number) {
    console.log("B ", this.productList)
    if (sortId == 1) {
      this.productList = this.productList.sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));
    }

    if (sortId == 2) {
      this.productList = this.productList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }

    if (sortId == 3) {
      this.productList = this.productList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    if (sortId == 5) {
      this.productList = this.productList.sort((a, b) => a.productName.localeCompare(b.productName));
    }

  }


  goToCart() {
    // this.router.navigate(["add-to-cart"]);
    this.cartService.addToCart().subscribe((res => {
      
    }))
    // this.router.navigate(["add-to-cart"]);
  }

  showSelectedBrand(brand: Array<any>) {
    console.log(this.productListResponse, brand)
    if (brand.length > 0)
      this.productList = this.productListResponse.filter(x => brand.includes(x.brandId)); 
    else
      this.productList = [...this.productListResponse];
  }

  showSelectedRating(rating: Array<any>) {
    console.log("rating ", rating)
    if (rating.length > 0)
      this.productList = this.productListResponse.filter(x => rating.includes(x.ratings));
    else
      this.productList = [...this.productListResponse];
  }

  showSelectedPriceRange(event){
    console.log('e ', event);
    this.productList = this.productListResponse.filter(x => x.price >= event.minPrice && x.price <= event.maxPrice );

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

}
