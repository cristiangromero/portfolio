import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

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
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getData().subscribe(data =>{
      this.myPortfolio=data;
      this.locat=data.location;
      this.education=data.education;
      this.experience=data.experience;
    });
  }

}
