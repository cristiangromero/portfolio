import { Component } from '@angular/core';
import {ScriptLoaderService} from './services/script-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  constructor(private _LoadScripts:ScriptLoaderService){
   /* _LoadScripts.loader(["vendor/purecounter/purecounter"]);
    _LoadScripts.loader(["vendor/aos/aos"]);
    _LoadScripts.loader(["vendor/glightbox/js/glightbox"]);
    _LoadScripts.loader(["vendor/isotope-layout/isotope.pkgd"]);
    _LoadScripts.loader(["vendor/swiper/swiper-bundle.min"]);
    _LoadScripts.loader(["vendor/typed.js/typed"]);
    _LoadScripts.loader(["vendor/waypoints/noframework.waypoints"]);
    _LoadScripts.loader(["js/main"]);*/
  }
  ngOnInit(): void {
    this._LoadScripts.loader(["vendor/purecounter/purecounter"]);
    this._LoadScripts.loader(["vendor/aos/aos"]);
    this._LoadScripts.loader(["vendor/glightbox/js/glightbox"]);
    this._LoadScripts.loader(["vendor/isotope-layout/isotope.pkgd"]);
    this._LoadScripts.loader(["vendor/swiper/swiper-bundle.min"]);
    this._LoadScripts.loader(["vendor/typed.js/typed"]);
    this._LoadScripts.loader(["vendor/waypoints/noframework.waypoints"]);
    this._LoadScripts.loader(["js/main"]);
  }
}