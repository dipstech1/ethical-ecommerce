import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoaderComponent } from './components/loader/loader.component'
import { RouterModule } from '@angular/router';



import { ConfirmPopupComponent } from './components/confirm-popup/confirm-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { DepartmentsMenuComponent } from './partial-views/departments-menu/departments-menu.component';
import { HeaderSearchComponent } from './partial-views/header-search/header-search.component';
import { HeaderToolbarComponent } from './partial-views/header-toolbar/header-toolbar.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderPrimaryMenuComponent } from './partial-views/header-primary-menu/header-primary-menu.component';
import { HeaderTopbarComponent } from './partial-views/header-topbar/header-topbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FooterSitemapComponent } from './partial-views/footer-sitemap/footer-sitemap.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CartManagementComponent } from './partial-views/cart-management/cart-management.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';



@NgModule({
  declarations: [ LoaderComponent, ConfirmPopupComponent, HeaderComponent, DepartmentsMenuComponent, HeaderSearchComponent, HeaderToolbarComponent, CartComponent, HeaderPrimaryMenuComponent, HeaderTopbarComponent, FooterComponent, FooterSitemapComponent, WidgetsComponent, BreadcrumbComponent, CartManagementComponent, StarRatingComponent, ],
  entryComponents:[ConfirmPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports : [LoaderComponent,ConfirmPopupComponent,ReactiveFormsModule,FormsModule,HeaderComponent,
    FooterComponent,WidgetsComponent,BreadcrumbComponent, CartManagementComponent,StarRatingComponent]
})
export class SharedModule { }
