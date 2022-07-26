import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';
import { SocialMedia } from '../models/SocialMedia';

@Injectable({
  providedIn: 'root'
})
export class HeadService {

  private url = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public getPerson():Observable<Person>{
    return this.http.get<Person>(this.url+"person/1");
  }

  public updatePerson(person:Person):Observable<Person>{
    return this.http.put<Person>(this.url+"person/",person);
  }

  public getSocialMedia():Observable<SocialMedia[]>{
    return this.http.get<SocialMedia[]>(this.url+"socialmedia/");
  }

  public updateSocialMedia(socialMedia:SocialMedia):Observable<SocialMedia>{
    return this.http.put<SocialMedia>(this.url+"socialmedia/",socialMedia);
  }

  public addSocialMedia(socialMedia:SocialMedia):Observable<SocialMedia>{
    return this.http.post<SocialMedia>(this.url+"socialmedia/",socialMedia);
  }

  public deleteSocialMedia(socialMediaId:number):Observable<void>{
    return this.http.delete<void>(this.url+"socialmedia/"+socialMediaId);
  }

}
