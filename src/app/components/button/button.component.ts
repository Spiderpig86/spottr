import { Component, Input } from '@angular/core';

@Component({
  selector: 'spottr-button',
  template: `
    <button
      class="border-white border-2 text-white bg-transparent rounded-3xl px-6 py-2 font-semibold text-xs uppercase transition-all duration-200 shadow-2xl hover:text-gray-900 hover:bg-white"
    >
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() text: string;
  constructor() {}
}
