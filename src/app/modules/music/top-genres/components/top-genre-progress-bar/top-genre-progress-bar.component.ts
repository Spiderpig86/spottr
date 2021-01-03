import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'top-genre-progress-bar',
  styleUrls: ['./top-genre-progress-bar.component.scss'],
  template: `
    <div>
      <div class="progress-bar overflow-hidden h-4 text-xs flex rounded text-center text-gray-700">
        <div
          [style.width.%]="percent"
          class="progress-bar-fill flex text-center whitespace-nowrap text-white justify-center"
        >
        </div>
          <span>{{ roundedPercent }}%</span>
      </div>
    </div>
  `,
})
export class TopGenreProgressBarComponent {
  roundedPercent: number;
  @Input() percent: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
      this.roundedPercent = Math.round(this.percent);
  }
}
