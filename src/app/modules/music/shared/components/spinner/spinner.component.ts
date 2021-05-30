import { Component } from '@angular/core';

@Component({
  selector: 'spinner',
  styleUrls: ['./spinner.component.scss'],
  template: `
    <div class="spinner__container">
      <div class="spinner">
        <div class="spinner__progress"></div>
      </div>
    </div>
  `,
})
export class SpinnerComponent {
  constructor() {}
}
