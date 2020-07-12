import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'


@Injectable({providedIn : 'root'})

export class ProductListService {

    url = "http://localhost:3000"
    constructor(private http:HttpClient){}

    public getProductLists(){
        return this.http.get(this.url+"/productList");
    }

    public getBrands(){
        return this.http.get(this.url+"/brands");
    }

    public getProductSuggestion(){
        return this.http.get(this.url+"/productSuggestion");
    }
}