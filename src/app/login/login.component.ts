import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationsService } from '../services/authentications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authenticationService.GoogleAuth().then(
      response => {
        this.authenticationService.userData = response;
        this.router.navigate(['home'])
      }
    ).catch(
      error => console.log('DEU ERRADO')
    )
  }

}
