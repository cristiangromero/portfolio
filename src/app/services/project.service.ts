import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/Person';
import { Projects } from '../models/Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url = 'https://portfoliocristian.herokuapp.com/api/';

  constructor(private http:HttpClient) { }

  public getPerson():Observable<Person>{
    return this.http.get<Person>(this.url+"person/1");
  }

  public updatePerson(person:Person):Observable<Person>{
    return this.http.put<Person>(this.url+"person/",person);
  }

  public getProjects():Observable<Projects[]>{
    return this.http.get<Projects[]>(this.url+"project/");
  }

  public updateProjects(project:Projects):Observable<Projects>{
    return this.http.put<Projects>(this.url+"project/",project);
  }

  public addProjects(project:Projects):Observable<Projects>{
    return this.http.post<Projects>(this.url+"project/",project);
  }

  public deleteProjects(projectId:number):Observable<void>{
    return this.http.delete<void>(this.url+"project/"+projectId);
  }

}
