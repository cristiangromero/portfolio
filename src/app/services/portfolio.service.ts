import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private url = 'https://portfoliocristian.herokuapp.com/api/';

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    //return this.http.get('./assets/data/data.json');
    return this.http.get(this.url+"person/1");
  }
  
}
