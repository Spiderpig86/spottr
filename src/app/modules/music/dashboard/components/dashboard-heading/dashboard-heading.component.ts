import { Component } from '@angular/core';

@Component({
    selector: 'dashboard-heading',
    styleUrls: ['./dashboard-heading.component.scss'],
    template: `
        <div>
            <figure class="md:flex rounded-xl">
                <img class="w-32 h-32 md:h-auto md:rounded-none rounded-full mx-auto" src="" alt="Profile" />
            </figure>
        </div>
    `
})
export class DashboardHeadingComponent {
    constructor() {}
}