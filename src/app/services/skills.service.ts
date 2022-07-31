import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/Person';
import { Skills } from '../models/Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private url = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public getPerson():Observable<Person>{
    return this.http.get<Person>(this.url+"person/1");
  }

  public updatePerson(person:Person):Observable<Person>{
    return this.http.put<Person>(this.url+"person/",person);
  }

  public getSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.url+"skill/");
  }

  public updateSkills(skills:Skills):Observable<Skills>{
    return this.http.put<Skills>(this.url+"skill/",skills);
  }

  public addSkills(skills:Skills):Observable<Skills>{
    return this.http.post<Skills>(this.url+"skill/",skills);
  }

  public deleteSkills(skillsId:number):Observable<void>{
    return this.http.delete<void>(this.url+"skill/"+skillsId);
  }
}
