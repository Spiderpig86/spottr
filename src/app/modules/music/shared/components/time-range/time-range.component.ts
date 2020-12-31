import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TopTimeRange } from '../../services/top.service';

@Component({
  selector: 'time-range',
  styleUrls: ['time-range.component.scss'],
  template: `
    <div class="flex justify-end">
      <button
        *ngFor="let time of TOP_VIEW_TIME_RANGES"
        class="bg-transparent border-none font-semibold mr-4 text-gray-700 transition-colors duration-200 hover:text-white"
        [class.time-range--active]="timeRange === time.type"
        (click)="setTimeRange(time.type)"
      >
        {{ time.name }}
      </button>
    </div>
  `,
})
export class TimeRangeComponent implements OnInit {
  TOP_VIEW_TIME_RANGES = [
    { name: 'All Time', type: TopTimeRange.LONG_TERM },
    { name: 'Last 6 Months', type: TopTimeRange.MEDIUM_TERM },
    { name: 'Last 4 Weeks', type: TopTimeRange.SHORT_TERM },
  ];

  timeRange: TopTimeRange;
  @Input() defaultTimeRange: TopTimeRange;
  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.timeRange = this.defaultTimeRange;
  }

  setTimeRange(timeRange: TopTimeRange) {
    this.timeRange = timeRange;
    this.valueChange.emit(timeRange);
  }
}
