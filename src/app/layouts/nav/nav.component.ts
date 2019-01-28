import { Component, OnInit } from '@angular/core';
import { SpottrAuthService } from '../../services/spottr-service/spottr-auth.service';
import { Router } from '@angular/router';
import { SpottrService } from '../../services/spottr-service/spottr.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public curUrl = '';
  public curUser: User;

  public pages: any = [
    { name: 'Home', url: 'home', fa: ['fa', 'bars'] },
    { name: 'Top Artists', url: 'top-artists', fa: ['fa', 'headphones-alt'] },
    { name: 'Top Tracks', url: 'top-tracks', fa: ['fa', 'music'] },
    { name: 'Rankings', url: 'rankings', fa: ['fa', 'chart-line'] },
    { name: 'Top Genres', url: '#', fa: ['fa', 'genderless'] },
    { name: 'Playlist Stats', url: '#', fa: ['far', 'chart-bar'] }
  ];

  constructor(private router: Router, private auth: SpottrAuthService, private api: SpottrService) {
    this.api.getProfile(this.auth.getToken()).subscribe(user => {
      this.curUser = user;
    })
   }

  ngOnInit() {
    this.curUrl = this.router.url.substring(this.router.url.indexOf('dashboard'));
  }

  logout() {
    this.auth.logout();
  }

}
