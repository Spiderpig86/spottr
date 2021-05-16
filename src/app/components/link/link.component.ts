import { Component, Input } from '@angular/core';

@Component({
    selector: 'external-link',
    template: `
        <a [href]="this.href" rel="noopener noreferrer" target="_blank">
            <ng-content></ng-content>
        </a>
    `
})
export class ExternalLinkComponent {
    @Input()
    href: string;

    constructor() {}
}