import { Component, OnInit } from '@angular/core';
import { AuthenticationsService } from '../services/authentications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationsService
  ) { }

  ngOnInit(): void {
  }

  login() {

    this.authenticationService.GoogleAuth().then(
      response => console.log('DEU CERTO')
    ).catch(
      error => console.log('DEU ERRADO')
    )
  }

}
