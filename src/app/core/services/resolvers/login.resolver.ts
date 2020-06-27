import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';


@Injectable({providedIn : 'root'})

export class LoginResolver {

    constructor(){
    }

    resolve() {
        // return this.tstService.doTest(); 
      }

    
}