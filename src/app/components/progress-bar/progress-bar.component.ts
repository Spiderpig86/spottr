import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'progress-bar',
  styleUrls: ['./progress-bar.component.scss'],
  template: `
    <div>
      <div class="progress-bar overflow-hidden h-4 text-xs flex rounded text-center text-gray-700">
        <div
          [style.width.%]="percent"
          class="progress-bar-fill flex text-center whitespace-nowrap text-gray-700 justify-center relative"
        >
          <span class="absolute left-2">{{ roundedPercent }}%</span>
        </div>
      </div>
    </div>
  `,
})
export class ProgressBarComponent {
  roundedPercent: number;
  @Input() percent: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
      this.roundedPercent = Math.round(this.percent);
  }
}
