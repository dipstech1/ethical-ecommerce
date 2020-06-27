import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BannerSliderComponent } from './home/partial-view/banner-slider/banner-slider.component';
import { TrendingProductComponent } from './home/partial-view/trending-product/trending-product.component';
import { PromoBannerComponent } from './home/partial-view/promo-banner/promo-banner.component';
import { YoutubeFeedComponent } from './home/partial-view/youtube-feed/youtube-feed.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent, BannerSliderComponent, TrendingProductComponent, PromoBannerComponent, YoutubeFeedComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
