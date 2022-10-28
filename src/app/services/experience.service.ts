import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../models/Experience';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private url = 'https://portfoliocristian.herokuapp.com/api/';

  constructor(private http:HttpClient) { }

  public getPerson():Observable<Person>{
    return this.http.get<Person>(this.url+"person/1");
  }
  
  public getExperience():Observable<Experience[]>{
    return this.http.get<Experience[]>(this.url+"experience/");
  }

  public updateExperience(experience:Experience):Observable<Experience>{
    return this.http.put<Experience>(this.url+"experience/",experience);
  }

  public addExperience(experience:Experience):Observable<Experience>{
    return this.http.post<Experience>(this.url+"experience/",experience);
  }

  public deleteExperience(idExperience:number):Observable<void>{
    return this.http.delete<void>(this.url+"experience/"+idExperience);
  }
}
