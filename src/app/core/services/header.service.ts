import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import {IUser} from '../models/user.interface'

@Injectable({providedIn : 'root'})

export class HeaderService {

    url = "http://localhost:3000"
    constructor(private http:HttpClient){}

    public getHeaderDepartments(){
        return this.http.get(this.url+"/departments");
    }
}