import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './cart/partial-view/sidebar/sidebar.component';


@NgModule({
  declarations: [CartComponent, SidebarComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
