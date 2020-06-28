import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'


@Injectable({providedIn : 'root'})

export class ProductListService {

    url = "http://localhost:3000"
    constructor(private http:HttpClient){}

    public getProductLists(){
        return this.http.get(this.url+"/productList");
    }
}