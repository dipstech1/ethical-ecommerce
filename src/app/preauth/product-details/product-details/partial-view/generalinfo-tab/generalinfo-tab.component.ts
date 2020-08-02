import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-generalinfo-tab',
  templateUrl: './generalinfo-tab.component.html',
  styleUrls: ['./generalinfo-tab.component.css']
})
export class GeneralinfoTabComponent implements OnInit {

  constructor(private cartService : CartService) { }

  ngOnInit() {
  }

  goToCart(){
    this.cartService.addToCart().subscribe((res => {
      
    }))
  }

}
