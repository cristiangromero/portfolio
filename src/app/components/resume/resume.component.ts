import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthenticationService } from '../login/auth.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  myPortfolio:any=[];
  locat:any;
  education:any;
  experience:any;
  constructor(private datosPortfolio:PortfolioService, private loggedService:AuthenticationService) { }

  loggedIn(){
    return this.loggedService.isUserLoggedIn();
  }

  ngOnInit(): void {
    this.datosPortfolio.getData().subscribe(data =>{
      this.myPortfolio=data;
      this.locat=data.location;
      this.education=data.education;
      this.experience=data.experience;
    });
  }

}
