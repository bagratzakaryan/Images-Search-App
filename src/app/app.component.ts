import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    currentUrl: string | boolean = true;

    constructor(private router: Router) {
        this.router.events.pipe(filter((event: NavigationEnd) => event instanceof NavigationEnd))
            .subscribe((value: any) => {
                this.currentUrl = value.url.substr(1, value.url.length);
            });
    }
}
