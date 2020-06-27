import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/core/services/home.service';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  trendingProduct = [];
  protected ngUnsubscribe: Subject<void> = new Subject<void>();


  constructor(private service: HomeService) { }

  ngOnInit() {
    this.service.getTrendingProducts()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: any) => {
        this.trendingProduct = [...res]
      })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

}
