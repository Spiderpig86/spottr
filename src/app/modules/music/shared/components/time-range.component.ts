import { Component, EventEmitter, Output } from '@angular/core';
import { TopTimeRange } from '../services/top.service';

@Component({
  selector: 'time-range',
  template: `
    <div class="flex justify-end">
      <button
        *ngFor="let time of TOP_VIEW_TIME_RANGES"
        class="bg-transparent border-none font-semibold text-gray-700 transition-colors duration-200 hover:text-white"
        (click)="setTimeRange(time.type)"
      >
        {{ time.name }}
      </button>
    </div>
  `,
})
export class TimeRangeComponent {
  TOP_VIEW_TIME_RANGES = [
    { name: 'All Time', type: TopTimeRange.LONG_TERM },
    { name: 'Last 6 Months', type: TopTimeRange.MEDIUM_TERM },
    { name: 'Last 4 Weeks', type: TopTimeRange.SHORT_TERM },
  ];

  @Output() valueChange = new EventEmitter();

  constructor() {}

  setTimeRange(type: TopTimeRange) {
    this.valueChange.emit(type);
  }
}
