import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoaderComponent } from './components/loader/loader.component'
import { RouterModule } from '@angular/router';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';


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
import { StarRatingsComponent } from './components/star-rating/star-rating.component';
import { RatingModule } from 'ng-starrating';
import { ModalComponent } from './components/modal/modal.component';
import { LoginSignupComponent } from './partial-views/login-signup/login-signup.component';
import { NgbModule,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [LoaderComponent, ConfirmPopupComponent, HeaderComponent, DepartmentsMenuComponent, HeaderSearchComponent, HeaderToolbarComponent, CartComponent, HeaderPrimaryMenuComponent, HeaderTopbarComponent, FooterComponent, FooterSitemapComponent, WidgetsComponent, BreadcrumbComponent, CartManagementComponent, StarRatingsComponent, ModalComponent, LoginSignupComponent, ],
  entryComponents: [ConfirmPopupComponent, ModalComponent, LoginSignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RatingModule,
    NgbModule,
    AutocompleteLibModule
  ],
  providers:[NgbActiveModal],
  exports: [LoaderComponent, ConfirmPopupComponent, ReactiveFormsModule, FormsModule, HeaderComponent,
    // tslint:disable-next-line: max-line-length
    FooterComponent, WidgetsComponent, BreadcrumbComponent, CartManagementComponent, StarRatingsComponent, ModalComponent, LoginSignupComponent,NgbModule]
})
export class SharedModule { }
