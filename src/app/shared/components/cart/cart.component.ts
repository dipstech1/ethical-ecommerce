import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { takeUntil } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginSignupComponent } from '../../partial-views/login-signup/login-signup.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  cartList = [];
  totalPrice = 0;

  constructor(private cartService: CartService,private modalService: NgbModal) { }


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

  getTotalPrice() {
    this.totalPrice = this.cartList.reduce((acc,obj) =>{
      return acc + obj.price
    },0);
    this.totalPrice.toFixed(2)
  }

  removeItem(pid: any) {
    this.cartList = this.cartList.filter(x => x.pid != pid);
    this.getTotalPrice();
  }

  checkout() {
    console.log("hello");
    this.modalService.open(LoginSignupComponent);
  }
}
