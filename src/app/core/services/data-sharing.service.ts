import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private confirmPopup = new BehaviorSubject({});
  confirmStatus = this.confirmPopup.asObservable();

  private productData = new BehaviorSubject({});
  productData$ = this.productData.asObservable();

  private cartData = new BehaviorSubject([]);
  cartData$ = this.cartData.asObservable();

  private wishData = new BehaviorSubject([]);
  wishData$ = this.wishData.asObservable();

  constructor() { }

  popupStatus(status: any) {
    this.confirmPopup.next(status)
  }

  sendProductData(data: any) {
    this.productData.next(data);
  }

  sendCartData(data: any) {
    this.cartData.next(data);
  }

  sendWishListData(data: any) {
    this.wishData.next(data);
  }

}