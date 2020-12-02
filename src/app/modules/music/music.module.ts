import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MusicService } from './shared/services/music.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [MusicService],
})
export class MusicModule {}
