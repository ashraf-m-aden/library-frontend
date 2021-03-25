import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error;
  email: '';
  password: '';
  isLoading = false;
  constructor(
    private authS: AuthService,
    private router: Router
  ) {
  }

  submit(): void {
    //
    this.isLoading = true
    this.authS.login(this.email, this.password);
    this.authS.erroLogout().subscribe((data) => {
      if (data === 500) {
        this.error = "Erreur de pseudo ou de mot de passe";
        this.isLoading = false
      }    });
  }

}
