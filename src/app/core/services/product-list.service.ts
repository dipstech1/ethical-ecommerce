import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'


@Injectable({providedIn : 'root'})

export class ProductListService {

    url = "http://localhost:3000"
    constructor(private http:HttpClient){}

    public getProductLists(){
        return this.http.get(this.url+"/productList");
    }

    public getProductCategories(){
        return this.http.get(this.url + "/productCategories");
    }

    public getBrands(){
        return this.http.get(this.url+"/brands");
    }

    public getProductSuggestion(){
        return this.http.get(this.url+"/productSuggestion");
    }

    public getComboProductSuggestion(){
        return this.http.get(this.url+"/cheapercombo");
    }

    public getTechSpecs(id:any){
        return this.http.get(this.url+"/specs");
    }   

    public getReviews(id:any){
        return this.http.get(this.url+"/reviews");
    }   
}