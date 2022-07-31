import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../models/Education';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private url = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public getPerson():Observable<Person>{
    return this.http.get<Person>(this.url+"person/1");
  }
  
  public getEducation():Observable<Education[]>{
    return this.http.get<Education[]>(this.url+"education/");
  }

  public updateEducation(education:Education):Observable<Education>{
    return this.http.put<Education>(this.url+"education/",education);
  }

  public addEducation(education:Education):Observable<Education>{
    return this.http.post<Education>(this.url+"education/",education);
  }

  public deleteEducation(idEducation:number):Observable<void>{
    return this.http.delete<void>(this.url+"education/"+idEducation);
  }

}
