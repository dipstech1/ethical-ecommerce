import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'

@Injectable({providedIn : 'root'})

export class HomeService {

    url = "http://localhost:3000"
    constructor(private http:HttpClient){}

    public getTrendingProducts(){
        return this.http.get(this.url+"/trending_products");
    }
}