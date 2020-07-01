import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({providedIn : 'root'})

export class HomeService {

    url = environment.api_url; // "http://localhost:3000"
    constructor(private http: HttpClient){}

    public getTrendingProducts(){
        return this.http.get(this.url+"/trending_products");
    }
    public getSellers(){
        return this.http.get(this.url+"/sellers");
    }
}