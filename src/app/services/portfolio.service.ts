import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    //return this.http.get('./assets/data/data.json');
    return this.http.get(this.url+"publicapi/person/1");
  }

}
