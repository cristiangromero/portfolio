import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { DatePipe } from '@angular/common'
import { AuthenticationService } from '../login/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  myPortfolio:any=[];
  location:any;
  constructor(private datosPortfolio:PortfolioService, private loggedService:AuthenticationService) { }

  ngOnInit(): void {
    this.datosPortfolio.getData().subscribe(data =>{
      this.myPortfolio=data;
      this.location=data.location;
    });
  }

  loggedIn(){
    return this.loggedService.isUserLoggedIn();
  }

  CalculateAge(): any {
      const today: Date = new Date();
      const birthDate: Date = new Date(this.myPortfolio.birth);
      let age: number = today.getFullYear() - birthDate.getFullYear();
      const month: number = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  }
}
