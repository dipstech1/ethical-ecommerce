import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { HomeService } from '../core/services/home.service'


import { SharedModule } from '../shared/shared.module'
import { LoaderInterceptor } from './interceptors/loading.interceptor';
import { LoaderService } from './services/loader.service';
import { HttpConfigInterceptor } from './interceptors/http.interceptor';
import { DataService } from './services/data-sharing.service';
import { HeaderService } from './services/header.service';
import { ProductListService } from './services/product-list.service';
import { CartService } from './services/cart.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule, // name of this module
      providers: [
        HeaderService, 
        HomeService,
        ProductListService,
        LoaderService,
        CartService,
        DataService, 
        { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },

      ] 
    };
  }
}
