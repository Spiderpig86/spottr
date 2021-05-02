import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../models/user.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'page',
  styleUrls: ['./page.component.scss'],
  template: `
    <div class="page">
      <div class="nav-bar-wrapper">
        <nav-bar *ngIf="user$" [profile]="user$ | async"></nav-bar>
      </div>
      <ng-content></ng-content>
    </div>
  `,
})
export class PageComponent implements OnInit {
  user$: Observable<User>;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.user$ = this.profileService.getProfile();
  }
}
