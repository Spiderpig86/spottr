import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile',
  styleUrls: ['./profile.component.scss'],
  template: `
    <div class="page">
      <nav-bar *ngIf="user$" [profile]="user$ | async"></nav-bar>
      <profile-summary [user]="user$ | async"></profile-summary>
    </div>
  `,
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.user$ = this.profileService.getProfile();
  }
}
