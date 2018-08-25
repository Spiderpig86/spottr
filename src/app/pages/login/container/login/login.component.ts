import { Component, OnInit } from '@angular/core';
import { SpottrAuthService } from '../../../../services/spottr-service/spottr-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spottrAuthService: SpottrAuthService) { }

  ngOnInit() {

  }

  authUser(): void {
    this.spottrAuthService.authorizeSpotify();
  }
}
