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
    _LoadScripts.loader(["./assets/vendor/purecounter/purecounter.js"]);
    _LoadScripts.loader(["./assets/vendor/aos/aos.js"]);
    _LoadScripts.loader(["./assets/vendor/glightbox/js/glightbox.js"]);
    _LoadScripts.loader(["./assets/vendor/isotope-layout/isotope.pkgd.js"]);
    _LoadScripts.loader(["./assets/vendor/swiper/swiper-bundle.min.js"]);
    _LoadScripts.loader(["./assets/vendor/typed.js/typed.js"]);
    _LoadScripts.loader(["./assets/vendor/waypoints/noframework.waypoints.js"]);
    _LoadScripts.loader(["./assets/js/main.js"]);
    _LoadScripts.loader(["https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"]);
  }
}