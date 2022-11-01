import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Languages } from '../models/Languages';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private url = 'https://portfoliocristian.herokuapp.com/api/';

  constructor(private http:HttpClient) { }

  public getPerson():Observable<Person>{
    return this.http.get<Person>(this.url+"person/1");
  }

  public getLanguages():Observable<Languages[]>{
    return this.http.get<Languages[]>(this.url+"language/");
  }

  public updateLanguages(languages:Languages):Observable<Languages>{
    return this.http.put<Languages>(this.url+"language/",languages);
  }

  public addLanguages(languages:Languages):Observable<Languages>{
    return this.http.post<Languages>(this.url+"language/",languages);
  }

  public deleteLanguages(languagesId:number):Observable<void>{
    return this.http.delete<void>(this.url+"language/"+languagesId);
  }

}
