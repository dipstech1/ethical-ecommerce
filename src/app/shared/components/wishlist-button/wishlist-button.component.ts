import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data-sharing.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.css']
})
export class WishlistButtonComponent implements OnInit {

  @Input('product') product;

  constructor(private cartService : CartService) { }

  ngOnInit() {
  }

  addToWishList(){
    this.cartService.addToWishList(this.product).subscribe(res => {
     
    })
  }

}
