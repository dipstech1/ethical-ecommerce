import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuickviewComponent } from '../quickview/quickview.component';

@Component({
  selector: 'app-trending-product',
  templateUrl: './trending-product.component.html',
  styleUrls: ['./trending-product.component.css']
})
export class TrendingProductComponent implements OnInit, OnChanges {
  

  // tslint:disable-next-line: no-input-rename
  @Input('trendingProduct') trendingProduct;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
  }

  quickView(){
    this.modalService.open(QuickviewComponent);
  }

}
