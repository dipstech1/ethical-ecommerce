import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DataService } from './data-sharing.service';
import { tap } from 'rxjs/operators';

@Injectable({providedIn : 'root'})

export class CartService {

    url = environment.api_url; // "http://localhost:3000"
    constructor(private http: HttpClient, private ds : DataService){}

    public getCartProducts(){
        return this.http.get(this.url+"/cart");
    }

    public getCartProductsR(){
      this.http.get(this.url+"/cart").subscribe(data => {
        this.ds.sendCartData(data)
      })
    }

    public addToCart(){
        let newCart = {
            "pid":5,
            "size":"",
            "quantity":1,
            "productTitle" : "Check it",
            "brand": "Wooden",
            "color":"Green",
            "price":66.23,
            "image" : "../../../../assets/img/shop/cart/02.jpg"
        }

        return this.http.post(this.url+"/cart", newCart).pipe(
            tap(e => this.getCartProductsR())
        )

    }

    public getWishList(){
        this.http.get(this.url+"/wishList").subscribe(data => {
          this.ds.sendWishListData(data)
        })
      }

    public addToWishList(data){
        return this.http.post(this.url+"/wishList", data)
        .pipe(
          tap(e => this.getWishList())
      )
    }

   
    
}