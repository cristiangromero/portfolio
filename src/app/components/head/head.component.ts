import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { SocialMedia } from 'src/app/models/SocialMedia';
import { HeadService } from 'src/app/services/head.service';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  
  public person: Person | undefined;
  public social: SocialMedia[]=[];
  public editPerson: Person | undefined;

  constructor(private headService: HeadService, private loggedService:AuthenticationService) { }

  loggedIn(){
    return this.loggedService.isUserLoggedIn();
  }

  ngOnInit(): void {
    this.getPerson();
    this.getSocialMedia();
    }

  public getPerson():void{
    this.headService.getPerson().subscribe({
      next:(Response: Person) =>{
        this.person=Response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }
    });
  }

  public getSocialMedia():void{
    this.headService.getSocialMedia().subscribe({
      next:(Response: SocialMedia[]) =>{
        this.social=Response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }
    });
  }
}
