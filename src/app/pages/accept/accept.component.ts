import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpottrAuthService } from '../../services/spottr-service/spottr-auth.service';
import { SpottrAppConstants } from '../../services/spottr-service/spottr-service.config';
import { SpottrService } from '../../services/spottr-service/spottr.service';

/**
 * Temp component used to authenticate user and redirectr to dashboard
 *
 * @export
 * @class AcceptComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {
  token: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private auth: SpottrAuthService, private api: SpottrService) {
    // Extract Spotify user token
    this.route.fragment.subscribe(fragment => {
      const fragments = fragment.split('&'); // Get credentials
      this.token = fragments[0].split('=')[1];
      auth.setToken(this.token);
    });
  }

  ngOnInit() {
    this.testProfile();
  }

  /* TEST FUNCTIONS */
  testProfile() {
    this.api.getProfile(this.auth.getToken()).subscribe((res) => {
      // If the result is null, logout since token expired
      if (res === null) {
            this.auth.logout();
      }
      console.log(res);
    });
  }

}
