import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterComponent } from './partial-view/filter/filter.component';
import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  declarations: [ProductListComponent, FilterComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    SharedModule,
    Ng5SliderModule
  ]
})
export class ProductListModule { }
