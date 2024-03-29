import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Credenciales Inválidas';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(){
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Correcto.';
      this.router.navigate(['/home']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }

}
