import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from 'src/app/services/script-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(/*private _LoadScripts:ScriptLoaderService*/){
  }

  ngOnInit(): void {
   /* this._LoadScripts.loader(["vendor/purecounter/purecounter"]);
    this._LoadScripts.loader(["vendor/aos/aos"]);
    this._LoadScripts.loader(["vendor/glightbox/js/glightbox"]);
    this._LoadScripts.loader(["vendor/isotope-layout/isotope.pkgd"]);
    this._LoadScripts.loader(["vendor/swiper/swiper-bundle.min"]);
    this._LoadScripts.loader(["vendor/typed.js/typed"]);
    this._LoadScripts.loader(["vendor/waypoints/noframework.waypoints"]);
    this._LoadScripts.loader(["js/main"]);*/
  }

}
