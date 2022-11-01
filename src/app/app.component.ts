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
    _LoadScripts.loader([
      //"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",
      "https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js",
      "assets/js/main.js",
      //"assets/vendor/purecounter/purecounter.js",
      "assets/vendor/aos/aos.js",
      "assets/vendor/glightbox/js/glightbox.js",
      "assets/vendor/isotope-layout/isotope.pkgd.js",
      "assets/vendor/swiper/swiper-bundle.min.js",
      //"assets/vendor/typed.js/typed.js",
      "assets/vendor/waypoints/noframework.waypoints.js"
    ]);
  }
}