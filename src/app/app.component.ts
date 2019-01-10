import { Component, OnInit } from '@angular/core';
import { SpottrAuthService } from './services/spottr-service/spottr-auth.service';

/**
 * This will serve as the base container of the application
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spottr';

  constructor(private spottrAuthService: SpottrAuthService) { }

  ngOnInit() {

  }

  authUser(): void {
    this.spottrAuthService.authorizeSpotify();
  }
}
