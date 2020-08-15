import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({providedIn : 'root'})

export class HeaderService {

    url =  environment.api_url ;//+'/department';
    constructor(private http:HttpClient){}

    public getHeaderDepartments(){
        return this.http.get(this.url+"/department");
    }

    public getSearchResult(searchResult){
       return this.http.get("http://www.omdbapi.com/?apikey=c8a68242&s=" + event)
    }

     
}