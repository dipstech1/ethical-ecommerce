import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReviewsTabComponent } from './product-details/partial-view/reviews-tab/reviews-tab.component';
import { TechspecsTabComponent } from './product-details/partial-view/techspecs-tab/techspecs-tab.component';
import { GeneralinfoTabComponent } from './product-details/partial-view/generalinfo-tab/generalinfo-tab.component';
import { ProductCarouselComponent } from './product-details/partial-view/product-carousel/product-carousel.component';
import { ProductBundleComponent } from './product-details/partial-view/product-bundle/product-bundle.component';


@NgModule({
  declarations: [ProductDetailsComponent, ReviewsTabComponent, TechspecsTabComponent, GeneralinfoTabComponent, ProductCarouselComponent, ProductBundleComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    SharedModule
  ]
})
export class ProductDetailsModule { }
