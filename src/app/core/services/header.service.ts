import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'


@Injectable({providedIn : 'root'})

export class HeaderService {

    url = "http://localhost:3000"
    constructor(private http:HttpClient){}

    public getHeaderDepartments(){
        return this.http.get(this.url+"/departments");
    }

    public getSearchResult(searchResult){
       return this.http.get("http://www.omdbapi.com/?apikey=c8a68242&s=" + event)
    }

     
}