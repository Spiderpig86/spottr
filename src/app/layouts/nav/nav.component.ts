import { Component, OnInit } from '@angular/core';
import { SpottrAuthService } from '../../services/spottr-service/spottr-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public curUrl: string = '';

  public pages: any = [
    { name: 'Home', url: 'home' },
    { name: 'Top Artists', url: 'top-artists' },
    { name: 'Top Tracks', url: 'top-tracks' },
    { name: 'Top Genres', url: '#' },
    { name: 'Playlist Stats', url: '#' }
  ];

  constructor(private router: Router, private auth: SpottrAuthService) { }

  ngOnInit() {
    this.curUrl = this.router.url.substring(this.router.url.indexOf('dashboard'));
    console.log(this.curUrl);
  }

  private updateCurUrl() {
    this.curUrl = this.router.url.substring(this.router.url.indexOf('dashboard'));
  }

  logout() {
    this.auth.logout();
  }

}
