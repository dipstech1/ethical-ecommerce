import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-cart-management',
  templateUrl: './cart-management.component.html',
  styleUrls: ['./cart-management.component.css']
})
export class CartManagementComponent implements OnInit {

  constructor(private cartService : CartService,private notifyService : NotificationService) { }

  ngOnInit() {
  }

  addToCart(){
    this.cartService.addToCart().subscribe((res => {
      this.notifyService.showSuccess("Added to cart successfully !!", "Shopping.com")
    }))
  }

}
