import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({providedIn : 'root'})

export class HomeService {

    url = environment.api_url ;//+'/home'
    constructor(private http: HttpClient){}

    public getTrendingProducts(){
        return this.http.get(this.url +'/home');
    }
    public getSellers(){
        return this.http.get(this.url+ "/home");
    }
    public getPromoBanners(){
        return this.http.get(this.url +"/home");
    }
}