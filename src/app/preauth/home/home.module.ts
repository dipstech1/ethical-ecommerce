import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BannerSliderComponent } from './home/partial-view/banner-slider/banner-slider.component';
import { TrendingProductComponent } from './home/partial-view/trending-product/trending-product.component';
import { PromoBannerComponent } from './home/partial-view/promo-banner/promo-banner.component';
import { YoutubeFeedComponent } from './home/partial-view/youtube-feed/youtube-feed.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuickviewComponent } from './home/partial-view/quickview/quickview.component';  


@NgModule({
  declarations: [HomeComponent, BannerSliderComponent, TrendingProductComponent, PromoBannerComponent, YoutubeFeedComponent, QuickviewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule
  ],
  entryComponents:[QuickviewComponent]
})
export class HomeModule { }
