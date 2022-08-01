import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { HeroService } from 'src/app/services/hero.service';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthenticationService } from '../../services/auth.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public person: Person | undefined;
  
  constructor(private heroService: HeroService, private loggedService:AuthenticationService) { }

  loggedIn(){
    return this.loggedService.isUserLoggedIn();
  }

  ngOnInit(): void {
      
    this.getPerson();
    
  }

  public getPerson(): void {
    this.heroService.getPerson().subscribe({
      next: (Response: Person) => {
        this.person = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

}
