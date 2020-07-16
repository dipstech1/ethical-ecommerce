import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data-sharing.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  productData: {};

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.productData$.subscribe(data => {
      this.productData = data;
    })
  }

}
