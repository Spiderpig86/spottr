import { Component, OnInit } from '@angular/core';
import { SpottrAuthService } from '../../../services/spottr-service/spottr-auth.service';
import { SpottrService } from '../../../services/spottr-service/spottr.service';
import { SpottrAppConstants } from '../../../services/spottr-service/spottr-service.config';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  private shortGenres: string[];
  private mediumGenres: string[];
  private longGenres: string[];

  constructor(private auth: SpottrAuthService, private api: SpottrService) { }

  ngOnInit() {
    this.api.getTopGenres(this.auth.getToken(), SpottrAppConstants.TOP_SHORT).subscribe(genres => {
      this.shortGenres = genres;
    });
    this.api.getTopGenres(this.auth.getToken(), SpottrAppConstants.TOP_MEDIUM).subscribe(genres => {
      this.mediumGenres = genres;
    });
    this.api.getTopGenres(this.auth.getToken(), SpottrAppConstants.TOP_LONG).subscribe(genres => {
      this.longGenres = genres;
    });
  }

}
