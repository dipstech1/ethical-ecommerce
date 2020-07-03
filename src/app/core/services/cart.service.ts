import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({providedIn : 'root'})

export class CartService {

    url = environment.api_url; // "http://localhost:3000"
    constructor(private http: HttpClient){}

    public getCartProducts(){
        return this.http.get(this.url+"/cart");
    }
    
}