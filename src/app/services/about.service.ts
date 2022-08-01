import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private url = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public getPerson():Observable<Person>{
    return this.http.get<Person>(this.url+"person/1");
  }

  public updatePerson(person:Person):Observable<Person>{
    return this.http.put<Person>(this.url+"person/",person);
  }
  
}
