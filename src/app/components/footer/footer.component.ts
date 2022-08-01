import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private loggedService:AuthenticationService) { }

  loggedIn(){

    return this.loggedService.isUserLoggedIn();

  }

  logOut(){
    this.loggedService.logout();
  }

  ngOnInit(): void {
  }

}
