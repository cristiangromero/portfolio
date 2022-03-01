import { Component } from '@angular/core';
import {ScriptLoaderService} from './script-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  constructor(private _LoadScripts:ScriptLoaderService){
    _LoadScripts.loader(["js/main"]);
  }
}