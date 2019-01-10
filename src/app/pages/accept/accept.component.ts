import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpottrAuthService } from '../../services/spottr-service/spottr-auth.service';
import { SpottrAppConstants } from '../../services/spottr-service/spottr-service.config';

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

  constructor(private router: Router, private route: ActivatedRoute, private auth: SpottrAuthService) {
    // Extract Spotify user token
    this.route.fragment.subscribe(fragment => {
      const fragments = fragment.split('&'); // Get credentials
      this.token = fragments[0].split('=')[1];
    });
  }

  ngOnInit() {
  }

}
