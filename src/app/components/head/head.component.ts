import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  myPortfolio:any=[];
  redes:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getData().subscribe(data =>{
      this.myPortfolio=data;
      this.redes=data.socialmedia;
    });
  }

}
