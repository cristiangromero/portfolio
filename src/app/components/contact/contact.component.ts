import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { HeadService } from 'src/app/services/head.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public person: Person | undefined;

  constructor(private headService: HeadService, private loggedService:AuthenticationService) { }

  loggedIn(){
    return this.loggedService.isUserLoggedIn();
  }

  ngOnInit(): void {
    this.getPerson();
  }

  public getPerson(): void {
    this.headService.getPerson().subscribe({
      next: (Response: Person) => {
        this.person = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

}
