import { Component, OnInit } from '@angular/core';
import { SpottrAuthService } from '../../services/spottr-service/spottr-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private auth: SpottrAuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
