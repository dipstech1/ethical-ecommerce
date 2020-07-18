import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data-sharing.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {
  
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  cartList = [];
  totalPrice = 0;

  constructor(private cartService: CartService, private dataSharingService : DataService) { }

  ngOnInit() {
    this.getCartData();
  }

  getCartData(){
    this.cartService.getCartProducts()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res:any) => {
        this.cartList = [...res];
        this.getTotalPrice();
      })
  }

  getTotalPrice(){
    this.totalPrice = this.cartList.reduce((acc,obj) =>{
      return acc + obj.price
    },0);
    this.totalPrice.toFixed(2)
  }

  removeItem(pid:any){
    this.cartList = this.cartList.filter(x => x.pid != pid);
    this.dataSharingService.sendCartData(this.cartList);
    this.getTotalPrice();
  }

  checkQuantity(noOfItem:any, item:any){
    let index = this.cartList.findIndex(x => x.pid == item.pid);
    if(index >-1){
      this.cartList[index].price *= noOfItem;
      this.getTotalPrice();
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

}
