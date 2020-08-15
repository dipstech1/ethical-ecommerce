import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { environment } from '../../../environments/environment';


@Injectable({providedIn : 'root'})

export class ProductListService {

    url = environment.api_url 
    constructor(private http: HttpClient){}

    public getProductLists(){
        return this.http.get(this.url+"/productlist");
    }

    public getProductCategories(){
        return this.http.get(this.url + "/productlist");
    }

    public getBrands(){
        return this.http.get(this.url+"/productlist");
    }

    public getProductSuggestion(){
        return this.http.get(this.url+"/productlist");
    }

    public getComboProductSuggestion(){
        return this.http.get(this.url+"/productlist");
    }

    public getTechSpecs(id:any){
        return this.http.get(this.url+"/productlist");
    }   

    public getReviews(id:any){
        return this.http.get(this.url+"/productlist");
    }   
}