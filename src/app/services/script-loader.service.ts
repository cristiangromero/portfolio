import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  constructor() { }
  loader(jsfiles:string[]){
    for(let jsfile of jsfiles){
      let script = document.createElement("script");
      script.src = jsfile;
      let body =document.getElementsByTagName("body")[0];
      body.appendChild(script);
      console.log(script);
    }
  }
 
}
