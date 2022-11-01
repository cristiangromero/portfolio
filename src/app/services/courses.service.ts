import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Courses } from '../models/Courses';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private url = 'https://portfoliocristian.herokuapp.com/api/';

  constructor(private http:HttpClient) { }

  public getPerson():Observable<Person>{
    return this.http.get<Person>(this.url+"person/1");
  }

  public getCourses():Observable<Courses[]>{
    return this.http.get<Courses[]>(this.url+"course/");
  }

  public updateCourses(course:Courses):Observable<Courses>{
    return this.http.put<Courses>(this.url+"course/",course);
  }

  public addCourses(course:Courses):Observable<Courses>{
    return this.http.post<Courses>(this.url+"course/",course);
  }

  public deleteCourses(courseId:number):Observable<void>{
    return this.http.delete<void>(this.url+"course/"+courseId);
  }
}
