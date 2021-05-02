import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFollowingResponse, User } from '../shared/models/user.model';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'profile',
  styleUrls: ['./profile.component.scss'],
  template: `
    <page>
      <profile-summary
        [user]="user$ | async"
        [getFollowingResponse]="following$ | async"
      ></profile-summary>
    </page>
  `,
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;
  following$: Observable<GetFollowingResponse>;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.user$ = this.profileService.getProfile();
    this.following$ = this.profileService.getFollowing();
  }
}
